import { Schema, model } from "mongoose";
import { TDisclaimer } from "./disclaimer.interface";

const disclaimerSchema = new Schema<TDisclaimer>(
  {
    disDescription: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const DisclaimerModel = model<TDisclaimer>(
  "Disclaimer",
  disclaimerSchema,
);
