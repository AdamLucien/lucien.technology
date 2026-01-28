type WebVitalsMetric = {
  id: string;
  name: string;
  label: string;
  value: number;
};

export function reportWebVitals(metric: WebVitalsMetric) {
  if (process.env.NODE_ENV === "development") {
    console.log("WebVitals", metric);
  }
}
