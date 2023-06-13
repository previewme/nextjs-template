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
        arn    = "arn:aws:elasticloadbalancing:us-east-1:371032233725:targetgroup/blue-tg-nextjs-template/5d2194a53daad8eb"
        weight = 100
      }
      target_group {
        arn    = "arn:aws:elasticloadbalancing:us-east-1:371032233725:targetgroup/green-tg-nextjs-template/c550aaf79ee60683"
        weight = 0
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
      action.0.target_group_arn,
      "action.0.forward.0.target_group.0.weight",
      "action.0.forward.1.target_group.0.weight",
    ]
  }
}
