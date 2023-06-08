resource "aws_lb_target_group" "blue" {
  name                 = "blue-tg-nextjs-template"
  port                 = var.application_port
  protocol             = "HTTP"
  target_type          = "ip"
  vpc_id               = data.terraform_remote_state.common.outputs.vpc_id
  deregistration_delay = 60

  health_check {
    path     = var.health_check_path
    matcher  = "200"
    interval = 10
    timeout  = 2
  }
}

resource "aws_lb_target_group" "green" {
  name                 = "green-tg-nextjs-template"
  port                 = var.application_port
  protocol             = "HTTP"
  target_type          = "ip"
  vpc_id               = data.terraform_remote_state.common.outputs.vpc_id
  deregistration_delay = 60

  health_check {
    path     = var.health_check_path
    matcher  = "200"
    interval = 10
    timeout  = 2
  }
}

resource "aws_lb_listener_rule" "application_rule" {
  listener_arn = data.terraform_remote_state.common.outputs.public_lb_https_listener

  action {
    type             = "forward"
    target_group_arn = aws_lb_target_group.blue.arn
  }

  condition {
    host_header {
      values = [
        local.domain
      ]
    }
  }

  condition {
    path_pattern {
      values = [
        var.application_path,
        format("%s/*", var.application_path)
      ]
    }
  }

  lifecycle {
    create_before_destroy = true
    ignore_changes = [
      action.0.target_group_arn
    ]
  }
}
