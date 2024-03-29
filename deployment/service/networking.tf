resource "aws_lb_target_group" "blue" {
  name                 = trimsuffix(substr(format("blue-tg-%s", var.application_name), 0, 32), "-")
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
  name                 = trimsuffix(substr(format("green-tg-%s", var.application_name), 0, 32), "-")
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
    type = "forward"
    forward {
      target_group {
        arn = aws_lb_target_group.blue.arn
      }
      target_group {
        arn = aws_lb_target_group.green.arn
      }
    }
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
    ignore_changes = [
      action.0.target_group_arn
    ]
  }
}
