
// ─── Projects ───────────────────────────────────────────────────────────────

export const PROJECTS = {
  p1: {
    icon: "☁️",
    cat: "Cloud · Orchestration",
    title: "Cloud-Native Microservices Platform",
    github: "https://github.com/l3shan-sv",
    purpose: "Show you can run production workloads on Kubernetes.",
    desc: "Multiple microservices deployed on Kubernetes with autoscaling pods, Redis caching, Prometheus/Grafana monitoring dashboards, and the entire infrastructure provisioned via Terraform on AWS.",
    features: [
      "Multiple microservices deployed and managed on Kubernetes",
      "Horizontal Pod Autoscaling — pods scale automatically with traffic",
      "Redis caching layer reducing database load and improving response times",
      "Prometheus + Grafana monitoring dashboards for full system visibility",
      "Entire AWS infrastructure (EKS, VPC, EC2, IAM) provisioned via Terraform",
      "Production-grade reliability with self-healing deployments",
    ],
    stack: ["Kubernetes", "AWS EC2", "AWS VPC", "IAM", "Redis", "Terraform", "Prometheus", "Grafana"],
    tags: ["Kubernetes", "AWS", "Terraform", "Redis", "Prometheus"],
    images: [],
  },
  p2: {
    icon: "🔁",
    cat: "GitOps · CI/CD",
    title: "GitOps CI/CD Pipeline",
    github: "https://github.com/l3shan-sv",
    purpose: "Show deployment automation mastery.",
    desc: "Jenkins builds Docker images on every commit and pushes to registry. ArgoCD watches the repo and automatically deploys to Kubernetes — with rolling deployments and instant rollback capability.",
    features: [
      "Jenkins pipeline triggered on every git push — build, test, scan, push image",
      "ArgoCD continuously reconciles Kubernetes state with Git — automatic deploys",
      "Rolling deployments with zero service downtime",
      "Instant rollback on failed health checks — no manual intervention needed",
      "Full audit trail — every deployment is traceable to a specific commit",
      "Real-time drift detection across all environments",
    ],
    stack: ["Jenkins", "ArgoCD", "Kubernetes", "Docker", "GitHub"],
    tags: ["Jenkins", "ArgoCD", "Kubernetes", "Docker"],
    images: [],
  },
  p3: {
    icon: "🏗️",
    cat: "IaC · Networking",
    title: "Terraform AWS Infrastructure Factory",
    github: "https://github.com/l3shan-sv",
    purpose: "Show cloud infrastructure mastery.",
    desc: "Custom VPC with public/private subnets, EC2 instances, IAM roles with least-privilege policies, NAT gateway for private subnet egress, and Application Load Balancer — all declared in Terraform.",
    features: [
      "Custom VPC with public and private subnets across multiple Availability Zones",
      "EC2 instances with auto-scaling groups and launch templates",
      "IAM roles with least-privilege policies for each service",
      "NAT Gateway enabling secure private subnet internet access",
      "Application Load Balancer with health checks and target groups",
      "Remote Terraform backend with state locking — safe team collaboration",
    ],
    stack: ["Terraform", "AWS VPC", "EC2", "IAM", "NAT Gateway", "ALB", "Route 53"],
    tags: ["Terraform", "AWS VPC", "EC2", "IAM", "ALB"],
    images: [],
  },
  p4: {
    icon: "📊",
    cat: "SRE · Observability",
    title: "Full Observability & Monitoring Stack",
    github: "https://github.com/l3shan-sv",
    purpose: "Show SRE reliability mindset.",
    desc: "Monitor services, pods, and infrastructure in real time. Alerts fire automatically when systems fail. Grafana dashboards show system health at a glance — metrics, logs, and traces in one place.",
    features: [
      "Prometheus scraping metrics from all services, pods, nodes, and AWS resources",
      "Grafana dashboards using RED method — latency, error rate, saturation, traffic",
      "Alertmanager routing with escalation policies and on-call grouping",
      "CloudWatch integration for AWS-native signals (RDS, Lambda, ALB)",
      "Kubernetes metrics server enabling HPA decisions",
      "OpenTelemetry distributed tracing across microservices",
    ],
    stack: ["Prometheus", "Grafana", "Alertmanager", "CloudWatch", "Kubernetes Metrics", "OpenTelemetry", "Loki"],
    tags: ["Prometheus", "Grafana", "Alertmanager", "CloudWatch"],
    images: [],
  },
  p5: {
    icon: "⚡",
    cat: "Distributed Systems",
    title: "Event-Driven Kafka Platform",
    github: "https://github.com/l3shan-sv",
    purpose: "Show distributed systems and async architecture.",
    desc: "Order Service → Kafka → Payment Service, Notification Service, Analytics Service. Fully async, decoupled communication with message reliability, consumer groups, and real-time Kafka monitoring.",
    features: [
      "Order → Kafka → Payment, Notification, Analytics — fully decoupled pipeline",
      "Producers with configurable acks and idempotent retries for zero message loss",
      "Consumer groups enabling parallel processing and horizontal scaling",
      "Redis idempotency keys preventing duplicate event processing",
      "Kafka monitoring via JMX metrics feeding Prometheus and Grafana",
      "Infrastructure fully provisioned on AWS via Terraform",
    ],
    stack: ["Apache Kafka", "Kubernetes", "Redis", "Terraform", "AWS", "Prometheus", "Grafana"],
    tags: ["Kafka", "Kubernetes", "Redis", "Terraform"],
    images: [],
  },
  p6: {
    icon: "🔄",
    cat: "Migration · Modernisation",
    title: "Legacy → Cloud Migration",
    github: "https://github.com/l3shan-sv",
    purpose: "Show real-world modernisation skills.",
    desc: "Phase 1: Monolithic app on EC2 with manual deployments. Phase 2: Migrated to Docker containers, Kubernetes, Terraform, and GitOps. Phase 3: Added autoscaling, zero-downtime deploys, and measurable improvements.",
    features: [
      "Phase 1 — Legacy monolith on EC2 documented, baselined, and instrumented",
      "Phase 2 — App containerised with Docker, orchestrated on Kubernetes",
      "Phase 2 — Terraform replaces all manual AWS provisioning",
      "Phase 3 — ArgoCD + Jenkins GitOps pipeline for automated, auditable deploys",
      "Phase 3 — HPA autoscaling and zero-downtime rolling deployment strategy",
      "Before/after: deploy time improved from days to minutes; MTTR down 80%+",
    ],
    stack: ["Docker", "Kubernetes", "Terraform", "ArgoCD", "Jenkins", "AWS EC2", "Helm"],
    tags: ["Docker", "Kubernetes", "Terraform", "ArgoCD"],
    images: [],
  },
};

// ─── Tool Groups ─────────────────────────────────────────────────────────────

const s = (fill, children) => (
  <svg viewBox="0 0 32 32" width="17" height="17" style={{ flexShrink: 0 }}>
    <rect width="32" height="32" rx="5" fill={fill} />
    {children}
  </svg>
);

export const TOOL_GROUPS = [
  {
    label: "Cloud & IaC",
    chips: [
      {
        label: "AWS",
        svg: (
          <svg viewBox="0 0 32 32" fill="none" width="17" height="17" style={{ flexShrink: 0 }}>
            <path d="M9.5 19.5l-2.5 1 2.5 1 2.5-1z" fill="#F90" />
            <path d="M9.5 19.5v2l2.5-1v-2z" fill="#E57200" />
            <path d="M9.5 19.5l-2.5 1v2l2.5-1z" fill="#F90" />
            <path d="M16 10L9.5 13 16 16l6.5-3z" fill="#F90" />
            <path d="M16 16v6l6.5-3v-6z" fill="#E57200" />
            <path d="M16 16v6L9.5 19v-6z" fill="#F90" />
            <path d="M22.5 19.5l-2.5 1 2.5 1 2.5-1z" fill="#F90" />
            <path d="M22.5 19.5v2l2.5-1v-2z" fill="#E57200" />
            <path d="M22.5 19.5l-2.5 1v2l2.5-1z" fill="#F90" />
          </svg>
        ),
      },
      { label: "Terraform", svg: s("#7B42BC", <path d="M8 22l4-10 4 10M9.5 19h5M18 13h4a2 2 0 010 4h-4M22 23l-4-6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "Ansible",   svg: s("#1A1A1A", <><path d="M16 7l8 4.5v9L16 25l-8-4.5v-9z" stroke="#EE0000" strokeWidth="1.4" fill="none" /><circle cx="16" cy="16" r="3" fill="#EE0000" /></>) },
      { label: "CloudFormation", svg: s("#FF9900", <path d="M9 20h4.5M18.5 20h4.5M12 16.5c0-2.5 1.8-4 4-4s4 1.5 4 4v3.5H12v-3.5z" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" />) },
      { label: "EKS", svg: s("#326CE5", <><path d="M16 8l1.5 4M16 8l-1.5 4M22 13l-4 2M22 13l-2 4M24 20l-4-1.5M24 20l-3.5 2M19 26l-1.5-4M19 26l-3-3M13 26l1.5-4M13 26l3-3M8 20l4 1.5M8 20l3.5 2M10 13l3.5 2M10 13l2 4" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" /><circle cx="16" cy="16" r="3" fill="white" /></>) },
      { label: "S3",        svg: s("#FF9900", <path d="M10 16a6 6 0 1012 0M10 16H8M22 16h2M16 10V8M16 22v2" stroke="white" strokeWidth="1.5" strokeLinecap="round" fill="none" />) },
      { label: "RDS",       svg: s("#FF9900", <><ellipse cx="16" cy="11" rx="7" ry="2.5" stroke="white" strokeWidth="1.3" fill="none" /><path d="M9 11v10c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V11M9 16c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5" stroke="white" strokeWidth="1.3" fill="none" /></>) },
      { label: "Lambda",    svg: s("#FF9900", <path d="M9 23l5-14 3 7 3-7 4 14" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "IAM",       svg: s("#DD344C", <><path d="M16 8l7 3.5v6L16 21l-7-3.5v-6z" stroke="white" strokeWidth="1.3" fill="none" /><circle cx="16" cy="14.5" r="2.5" fill="white" /></>) },
      { label: "CloudFront",svg: s("#8C4FFF", <><path d="M8 16a8 8 0 1116 0 8 8 0 01-16 0z" stroke="white" strokeWidth="1.3" fill="none" /><path d="M16 8c-2.5 2.5-4 5-4 8s1.5 5.5 4 8M16 8c2.5 2.5 4 5 4 8s-1.5 5.5-4 8M8 16h16" stroke="white" strokeWidth="1.2" fill="none" /></>) },
      { label: "Route 53",  svg: s("#8C4FFF", <><circle cx="16" cy="13" r="4" stroke="white" strokeWidth="1.3" fill="none" /><path d="M8 25c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" /></>) },
      { label: "KMS",       svg: s("#FF9900", <><rect x="11" y="14" width="10" height="9" rx="1.5" stroke="white" strokeWidth="1.3" fill="none" /><path d="M13 14v-2.5a3 3 0 016 0V14" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" /><circle cx="16" cy="18.5" r="1.5" fill="white" /></>) },
    ],
  },
  {
    label: "Containers & Orchestration",
    chips: [
      {
        label: "Kubernetes",
        svg: (
          <svg viewBox="0 0 32 32" width="17" height="17" style={{ flexShrink: 0 }}>
            <rect width="32" height="32" rx="16" fill="#326CE5" />
            <path d="M16 7.5l1.4 4M16 7.5l-1.4 4M22.5 11.5l-3.8 1.8M22.5 11.5l-1.8 3.8M24.5 18.5l-4.2-1.4M24.5 18.5l-3.8 1.9M19 24.5l-1.4-4.2M19 24.5l-2.8-3M13 24.5l1.4-4.2M13 24.5l2.8-3M7.5 18.5l4.2 1.4M7.5 18.5l3.8 1.9M9.5 11.5l3.8 1.8M9.5 11.5l1.8 3.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" />
            <circle cx="16" cy="16" r="3" fill="white" />
          </svg>
        ),
      },
      { label: "Docker", svg: s("#2496ED", <><path d="M8 18c0-2.2 1.8-4 4-4h8a4 4 0 010 8H12a4 4 0 01-4-4z" stroke="white" strokeWidth="1.4" fill="none" /><path d="M14 14v-3a2 2 0 014 0v3" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" /></>) },
      { label: "Helm",   svg: s("#0F1689", <path d="M9 20l4-10 3 6 2-4 4 8M8 22h16" stroke="#00B4D8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "HPA",    svg: s("#DFD4BE", <><rect x="8" y="14" width="7" height="7" rx="1" stroke="#A86200" strokeWidth="1.3" fill="none" /><rect x="17" y="11" width="7" height="7" rx="1" stroke="#2A6B2E" strokeWidth="1.3" fill="none" /><path d="M15 17.5h-3M12 17.5v-3M14 13l3-2" stroke="#5C5240" strokeWidth="1" strokeLinecap="round" fill="none" /></>) },
      { label: "Service Mesh",       svg: s("#DFD4BE", <><path d="M10 16c0-3.3 2.7-6 6-6s6 2.7 6 6-2.7 6-6 6" stroke="#A86200" strokeWidth="1.4" strokeLinecap="round" fill="none" /><path d="M16 13v3l2 2" stroke="#A86200" strokeWidth="1.4" strokeLinecap="round" fill="none" /></>) },
      { label: "Container Security", svg: s("#DD344C", <><rect x="10" y="14" width="12" height="9" rx="1.5" stroke="white" strokeWidth="1.3" fill="none" /><path d="M13 14v-3a3 3 0 016 0v3" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" /><circle cx="16" cy="18.5" r="1.5" fill="white" /></>) },
    ],
  },
  {
    label: "CI/CD & GitOps",
    chips: [
      { label: "Jenkins",         svg: s("#D33833", <><circle cx="16" cy="16" r="8" stroke="white" strokeWidth="1.4" fill="none" /><path d="M16 11v6l3.5 2" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" /></>) },
      { label: "ArgoCD",          svg: s("#EF7B4D", <><path d="M10 20c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="white" strokeWidth="1.4" strokeLinecap="round" fill="none" /><circle cx="16" cy="14" r="2.5" fill="white" /><path d="M22 10l2-3M10 10L8 7" stroke="white" strokeWidth="1.4" strokeLinecap="round" /></>) },
      { label: "Blue-Green",      svg: s("#DFD4BE", <><rect x="8" y="12" width="7" height="9" rx="1.5" fill="#2A6B2E" opacity="0.9" /><rect x="17" y="12" width="7" height="9" rx="1.5" fill="#1565C0" opacity="0.9" /><path d="M15 16.5h2" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" /></>) },
      { label: "Canary Releases", svg: s("#DFD4BE", <><circle cx="12" cy="16" r="4" fill="#A86200" opacity="0.9" /><circle cx="20" cy="16" r="2.2" fill="#A86200" opacity="0.5" /><circle cx="26" cy="16" r="1.1" fill="#A86200" opacity="0.25" /></>) },
    ],
  },
  {
    label: "Observability",
    chips: [
      { label: "Prometheus",          svg: s("#E6522C", <><circle cx="16" cy="16" r="7" stroke="white" strokeWidth="1.4" fill="none" /><circle cx="16" cy="16" r="2.5" fill="white" /></>) },
      { label: "Grafana",             svg: s("#F46800", <path d="M8 22l4-9 4 9M9.5 19h5M18.5 13h4v9h-4z" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "Alertmanager",        svg: s("#E6522C", <path d="M8 22l3-12 3 8 2-5 3 9M8 22h16" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "Loki",                svg: s("#F05A28", <path d="M10 16h3l2-5 3 9 2-6 2 2h1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "CloudWatch",          svg: s("#FF9900", <path d="M10 22l2-6 2 3 2-8 2 6 2-2 2 4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "ELK Stack",           svg: s("#005571", <path d="M9 12h14M9 16h10M9 20h12" stroke="#FEC514" strokeWidth="1.5" strokeLinecap="round" fill="none" />) },
      { label: "OpenTelemetry",       svg: s("#425CC7", <path d="M10 22l3-13 3 10 2-6 3 9M8 22h16" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "Distributed Tracing", svg: s("#DFD4BE", <path d="M8 22l3-3 3 2 3-6 3 4 3-7" stroke="#A86200" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
    ],
  },
  {
    label: "Scripting",
    chips: [
      { label: "Python", svg: s("#3776AB", <><path d="M11 9c-1.7 0-3 1-3 2.5v2H16v1H10c-1.7 0-3 1-3 2.5v3c0 1.5 1.3 2.5 3 2.5h1v-2.5c0-1 .8-1.5 2-1.5H19c1.2 0 2-.7 2-1.5v-4C21 10 19.7 9 18 9h-7z" fill="white" opacity="0.9" /><path d="M16 15h5c1.7 0 3 1 3 2.5v3c0 1.5-1.3 2.5-3 2.5h-1v-2.5c0-1-.8-1.5-2-1.5h-4c-1.2 0-2-.7-2-1.5v-1c0-1 1.3-1.5 3-1.5z" fill="#FFD43B" opacity="0.9" /></>) },
      { label: "YAML",   svg: s("#DFD4BE", <path d="M9 12l7-3 7 3M9 12v8l7 3 7-3V12M16 9v14M9 12l7 3M23 12l-7 3" stroke="#A86200" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "Bash",   svg: s("#3E3E3E", <path d="M9 12l4 4-4 4M15 20h8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
    ],
  },
  {
    label: "Databases",
    chips: [
      { label: "PostgreSQL", svg: s("#336791", <><ellipse cx="16" cy="11" rx="7" ry="2.5" stroke="white" strokeWidth="1.3" fill="none" /><path d="M9 11v10c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V11M9 16c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5" stroke="white" strokeWidth="1.3" fill="none" /></>) },
      { label: "MySQL",      svg: s("#4479A1", <path d="M10 13h12M10 19h12M13 10v12M19 10v12" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />) },
      { label: "MongoDB",    svg: s("#47A248", <path d="M16 9l-5 2v6l5 3 5-3v-6zM11 11l5 3 5-3M16 14v6" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "Redis",      svg: s("#DC382D", <path d="M10 12c0 1.1.5 2.5 6 2.5S22 13.1 22 12M10 12c0-1.1 2.7-2 6-2s6 .9 6 2v8c0 1.1-2.7 2-6 2s-6-.9-6-2V12zM10 16c0 1.1 2.7 2 6 2s6-.9 6-2" stroke="white" strokeWidth="1.3" fill="none" />) },
      { label: "DynamoDB",   svg: s("#4053D6", <path d="M10 21l3-10 3 7 3-7 3 10M8 21h16" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
    ],
  },
  {
    label: "Security",
    chips: [
      { label: "WAF",                  svg: s("#DD344C", <><path d="M16 8l7 3v5c0 4-2.8 7-7 9-4.2-2-7-5-7-9V11z" stroke="white" strokeWidth="1.3" fill="none" strokeLinejoin="round" /><path d="M13 16l2 2 4-4" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" /></>) },
      { label: "IAM",                  svg: s("#DD344C", <><path d="M16 8l7 3v5c0 4-2.8 7-7 9-4.2-2-7-5-7-9V11z" stroke="white" strokeWidth="1.3" fill="none" /><circle cx="16" cy="16" r="2" fill="white" /></>) },
      { label: "Secrets Manager",      svg: s("#FF9900", <path d="M10 14h12M10 18h12M13 10v4M19 10v4M13 18v4M19 18v4" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" />) },
      { label: "VPC Security Groups",  svg: s("#DFD4BE", <><rect x="8" y="10" width="16" height="12" rx="2" stroke="#5C5240" strokeWidth="1.3" fill="none" /><path d="M8 15h16M13 15v7M19 15v7" stroke="#5C5240" strokeWidth="1.2" strokeLinecap="round" fill="none" /></>) },
      { label: "NACLs",                svg: s("#DFD4BE", <><path d="M8 10h16v3H8zM8 15h16v3H8zM8 20h16v3H8z" stroke="#5C5240" strokeWidth="1.2" fill="none" /><circle cx="22" cy="11.5" r="1" fill="#DD344C" /><circle cx="22" cy="16.5" r="1" fill="#2A6B2E" /><circle cx="22" cy="21.5" r="1" fill="#DD344C" /></>) },
      { label: "TLS/SSL",              svg: s("#DFD4BE", <><rect x="11" y="15" width="10" height="8" rx="1.5" stroke="#5C5240" strokeWidth="1.3" fill="none" /><path d="M13 15v-2.5a3 3 0 016 0V15" stroke="#5C5240" strokeWidth="1.3" strokeLinecap="round" fill="none" /><circle cx="16" cy="19" r="1.5" fill="#A86200" /></>) },
      { label: "KMS",                  svg: s("#FF9900", <><rect x="11" y="13" width="10" height="9" rx="1.5" stroke="white" strokeWidth="1.3" fill="none" /><path d="M13 13v-2.5a3 3 0 016 0V13" stroke="white" strokeWidth="1.3" strokeLinecap="round" fill="none" /><circle cx="16" cy="17.5" r="1.5" fill="white" /></>) },
    ],
  },
  {
    label: "SRE",
    chips: [
      { label: "SLIs/SLOs",           svg: s("#DFD4BE", <path d="M16 9v14M10 12l12 8M22 12L10 20" stroke="#2A6B2E" strokeWidth="1.4" strokeLinecap="round" fill="none" />) },
      { label: "Incident Management",  svg: s("#DFD4BE", <><path d="M9 23l2-8 5 4 5-10 2 6" stroke="#DD344C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" /><circle cx="16" cy="16" r="2" fill="#A86200" /></>) },
      { label: "Disaster Recovery",    svg: s("#DFD4BE", <path d="M10 22V14l6-5 6 5v8M14 22v-5h4v5" stroke="#5C5240" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" />) },
      { label: "Chaos Engineering",    svg: s("#DFD4BE", <><path d="M16 9c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7" stroke="#DD344C" strokeWidth="1.4" strokeLinecap="round" fill="none" /><path d="M20 8l4 4-2-4-4 2" fill="#DD344C" /></>) },
      { label: "Runbook Development",  svg: s("#DFD4BE", <><path d="M10 12h12M10 16h8M10 20h10" stroke="#5C5240" strokeWidth="1.3" strokeLinecap="round" fill="none" /><path d="M20 19l4-3-4-3" stroke="#A86200" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none" /></>) },
    ],
  },
  {
    label: "Operating Systems",
    chips: [
      {
        label: "macOS",
        svg: (
          <svg viewBox="0 0 32 32" fill="none" width="17" height="17" style={{ flexShrink: 0 }}>
            <rect width="32" height="32" rx="7" fill="#1C1C1E" />
            <path d="M16 7c-1.5 0-2.8.8-3.5 2C11.2 10 11 10.7 11 11.5c0 .3 0 .5.1.8C9.3 13.1 8 14.8 8 17c0 3.3 2.5 6 5.5 6 .7 0 1.4-.2 2-.5.3-.1.6-.2 1-.2h-.1c.3 0 .6.1 1 .2.6.3 1.3.5 2 .5 3 0 5.5-2.7 5.5-6 0-2.2-1.3-3.9-3.1-4.7.1-.3.1-.5.1-.8 0-.8-.2-1.5-.5-2.1C20.8 7.8 19.5 7 18 7c-.9 0-1.6.3-2.2.7-.2.1-.4.2-.5.2h-.2c-.1 0-.3-.1-.5-.2C14 7.3 13.1 7 12.2 7z" fill="white" opacity="0.9" />
            <path d="M16 5c.8-1 2-1.5 3-1.5" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          </svg>
        ),
      },
      {
        label: "Ubuntu / Linux",
        svg: (
          <svg viewBox="0 0 32 32" fill="none" width="17" height="17" style={{ flexShrink: 0 }}>
            <rect width="32" height="32" rx="7" fill="#E95420" />
            <circle cx="16" cy="16" r="7" stroke="white" strokeWidth="1.5" fill="none" />
            <circle cx="16" cy="8.5" r="2" fill="white" />
            <circle cx="22.5" cy="20" r="2" fill="white" />
            <circle cx="9.5" cy="20" r="2" fill="white" />
            <path d="M16 10.5v2.5M21 18.5l-2-1.5M11 18.5l2-1.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="16" cy="16" r="2.5" fill="white" />
          </svg>
        ),
      },
    ],
  },
];
