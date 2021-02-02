// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

const init = () => {
  //   Sentry.init({
  //     dsn:
  //       "https://1b90ec453ba74d339264f02ce8f7464f@o485298.ingest.sentry.io/5540465",
  //     integrations: [new Integrations.BrowserTracing()],
  //     tracesSampleRate: 1.0,
  //   });
};

const log = (error) => {
  console.error(error);
  //   Sentry.captureException(error);
};

export default {
  init,
  log,
};
