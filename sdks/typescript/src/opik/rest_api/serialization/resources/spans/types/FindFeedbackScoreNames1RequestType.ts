/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../../../index";
import * as OpikApi from "../../../../api/index";
import * as core from "../../../../core";

export const FindFeedbackScoreNames1RequestType: core.serialization.Schema<
    serializers.FindFeedbackScoreNames1RequestType.Raw,
    OpikApi.FindFeedbackScoreNames1RequestType
> = core.serialization.enum_(["general", "tool", "llm", "guardrail"]);

export declare namespace FindFeedbackScoreNames1RequestType {
    export type Raw = "general" | "tool" | "llm" | "guardrail";
}
