// this distinguishes between different message types
// eg `anonymous@hajinkim >` should be displayed differently to other texts
// this protocol allows you to easily distinguish those

// format of message is: "<PROTOCOL><messageSeparator><MESSAGE>"
export const messageSeparator = "//"

export const TYPE_INDEX = 0
export const CONTENT_INDEX = 1

export const terminalPrompt = "anonymous@hajinkim >"

export const TYPE_SYSTEM_TEXT = "System Returns"
export const TYPE_WITH_PROMPT_TEXT = "User Inputs"





