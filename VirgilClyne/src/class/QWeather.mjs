import ENV from "../ENV/ENV.mjs";
import parseWeatherKitURL from "../function/parseWeatherKitURL.mjs"
import ForecastNextHour from "./ForecastNextHour.mjs";
import providerNameToLogo from "../function/providerNameToLogo.mjs";

export default class QWeather {
    constructor($ = new ENV("QWeather"), options) {
        this.Name = "QWeather";
        this.Version = "1.0.7";
        $.log(`\n🟧 ${this.Name} v${this.Version}\n`, "");
        this.url = options.url || new URL($request.url);
        this.host = options.host || "devapi.qweather.com";
        this.token = options.token;
        this.header = options.header || { "Content-Type": "application/json" };
        this.convertUnits = options.convertUnits || false;
        const Parameters = parseWeatherKitURL(this.url);
        Object.assign(this, Parameters);
        this.$ = $;
    };

    async Minutely(token = this.token, version = "v7") {
        this.$.log(`☑️ Minutely, token: ${token}, host: ${this.host}, version: ${version}`, "");
        const request = {
            "url": `https://${this.host}/${version}/minutely/5m?location=${this.longitude},${this.latitude}&key=${token}`,
            "header": this.header,
        };
        let forecastNextHour;
        try {
            const body = await this.$.fetch(request).then(response => JSON.parse(response?.body ?? "{}"));
            const timeStamp = Math.round(Date.now() / 1000);
            switch (body?.code) {
                case "200":
                    let minuteStemp = new Date(body?.updateTime).setSeconds(0, 0);
                    minuteStemp = minuteStemp.valueOf() / 1000;
                    forecastNextHour = {
                        "metadata": {
                            "attributionUrl": body?.fxLink,
                            "expireTime": timeStamp + 60 * 60,
                            "language": `${this.language}-${this.country}`, // body?.lang,
                            "latitude": body?.location?.[0],
                            "longitude": body?.location?.[1],
                            "providerLogo": providerNameToLogo("和风天气", this.version),
                            "providerName": "和风天气",
                            "readTime": timeStamp,
                            "reportedTime": minuteStemp,
                            "temporarilyUnavailable": false,
                            "sourceType": "MODELED",
                        },
                        "condition": [],
                        "forecastEnd": 0,
                        "forecastStart": minuteStemp,
                        "minutes": body?.minutely?.map((minutely, index) => {
                            const minute = {
                                "perceivedPrecipitationIntensity": 0,
                                "precipitationChance": 0,
                                "precipitationIntensity": parseFloat(minutely.precip),
                                "startTime": new Date(minutely.fxTime) / 1000,
                            };
                            let minutes = [{ ...minute }, { ...minute }, { ...minute }, { ...minute }, { ...minute }];
                            minutes = minutes.map((minute, index) => {
                                minute.startTime = minute.startTime + index * 60;
                                return minute;
                            });
                            return minutes;
                        }).flat(Infinity),
                        "summary": []
                    };
                    forecastNextHour.minutes.length = Math.min(85, forecastNextHour.minutes.length);
                    forecastNextHour.forecastEnd = minuteStemp + 60 * forecastNextHour.minutes.length;
                    forecastNextHour.minutes = ForecastNextHour.Minute(forecastNextHour.minutes, body?.summary, "mmph");
                    forecastNextHour.summary = ForecastNextHour.Summary(forecastNextHour.minutes);
                    forecastNextHour.condition = ForecastNextHour.Condition(forecastNextHour.minutes);
                    break;
                case "204":
                case "400":
                case "401":
                case "402":
                case "403":
                case "404":
                case "429":
                case "500":
                case undefined:
                    throw JSON.stringify({ "status": body?.code, "reason": body?.error });
            };
        } catch (error) {
            this.$.logErr(error);
        } finally {
            //this.$.log(`🚧 forecastNextHour: ${JSON.stringify(forecastNextHour, null, 2)}`, "");
            this.$.log(`✅ Minutely`, "");
            return forecastNextHour;
        };
    };
};
