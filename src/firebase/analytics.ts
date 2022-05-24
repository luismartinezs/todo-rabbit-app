import { getAnalytics, type Analytics } from "firebase/analytics";
import app from "@/firebase/app";

let analytics: Analytics | null = null;

try {
  analytics = getAnalytics(app);
} catch (err) {
  console.error(err);
}

export default analytics;
