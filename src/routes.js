const UrlPrettifier = require("next-url-prettifier").default;

const INDEX = "index";
const BYCOUNTRY = "byCountry";
const WORLDSTATS = "worldStats";

module.exports = {
  INDEX,
  BYCOUNTRY
};

const routes = [
  {
    page: INDEX,
    prettyUrl: "/"
  },
  {
    page: BYCOUNTRY,
    prettyUrl: (params = {}) => `/byCountry${query(params)}`,
    prettyUrlPatterns: [{ pattern: "/byCountry" }]
  },
  {
    page: WORLDSTATS,
    prettyUrl: (params = {}) => `/worldStats${query(params)}`,
    prettyUrlPatterns: [{ pattern: "/worldStats" }]
  },
];

const urlPrettifier = new UrlPrettifier(routes);
module.exports.Routes = urlPrettifier;

