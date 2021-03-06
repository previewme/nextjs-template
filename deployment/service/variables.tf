variable "alert_topic_name" {
  description = "The name of the SNS topic where alerts should be sent"
  type        = string
  default     = "alerting-AlertNotifications"
}

variable "application_name" {
  type        = string
  description = "The name of the application"
  default     = "nextjs-template"
}

variable "application_path" {
  type        = string
  description = "The resource path defined in the next.config.js"
  default     = "/nextjs-template"
}

variable "application_port" {
  type        = number
  description = "The port which is used by the application"
  default     = 3000
}

variable "cloudwatch_log_retention_period" {
  description = "Specifies the number of days you want to retain notification forwarding log events in the Lambda log group."
  default     = 90
  type        = number
}

variable "container_image" {
  type        = string
  description = "The container image which will be deployed initially"
}

variable "health_check_path" {
  type        = string
  description = "The container image which will be deployed initially"
  default     = "/nextjs-template"
}

variable "launch_type" {
  default     = "FARGATE"
  description = "The launch type on which to run your service"
  type        = string
}

variable "profile" {
  description = "The AWS profile to use"
  default     = "default"
  type        = string
}

variable "TFC_WORKSPACE_NAME" {
  type    = string
  default = ""
}
