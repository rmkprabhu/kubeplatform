export interface Question {
  type: 'MCQ' | 'Text';
  question: string;
  options?: string[];
  correctAnswer?: number;
  answer?: string;
}

export interface Topic {
  name: string;
  description: string;
  questions: Question[];
}

export interface Category {
  name: string;
  description: string;
  icon: string;
  topics: Topic[];
}

export const kubernetesData: Category[] = [
  {
    "name": "Beginner",
    "description": "Start your DevOps journey with fundamental concepts and basic operations",
    "icon": "🚀",
    "topics": [
      {
        "name": "Linux",
        "description": "Learn the basics of Linux operating system",
        "questions": [
          {
            "type": "Text",
            "question": "What is Linux?",
            "answer": "Linux is an open-source operating system kernel that serves as the core component of various Linux distributions. It was developed by Linus Torvalds in the 1990s."
          },
          {
            "type": "Text",
            "question": "Differentiate between Linux and Unix.",
            "answer": "Unix is a family of multitasking, multi-user operating systems. Linux is a Unix-like operating system inspired by Unix but not directly derived from it. The key difference is that Unix is proprietary while Linux is open source."
          },
          {
            "type": "Text",
            "question": "What are the different features of Linux?",
            "answer": "Linux offers features like portability, security, open-source nature, multi-user capability, multitasking capability, hierarchical file system, and a powerful command line interface."
          },
          {
            "type": "Text",
            "question": "How do you find files in Linux?",
            "answer": "The find command is used to search for files and directories based on specified criteria such as name, type, size, and permissions."
          },
          {
            "type": "Text",
            "question": "Explain the use of the grep command.",
            "answer": "The grep command searches for specific strings or regular expression patterns within text files. It is useful for finding patterns in single or multiple files."
          },
          {
            "type": "Text",
            "question": "What is the difference between a soft link and a hard link?",
            "answer": "A soft link, also known as a symbolic link, acts as a pointer to another file or directory, similar to a shortcut in Windows. A hard link creates a directory entry that points directly to the inode of another file."
          },
          {
            "type": "Text",
            "question": "How do you manage services in Linux?",
            "answer": "Services are managed using commands like systemctl and service. These commands allow you to start, stop, restart, and check the status of services."
          },
          {
            "type": "Text",
            "question": "Explain the concept of SSH and its uses.",
            "answer": "SSH (Secure Shell) is a protocol for securely accessing remote machines over unsecured networks. It provides encrypted communication between the client and server, enabling users to log in, execute commands, and transfer files remotely."
          },
          {
            "type": "Text",
            "question": "How do you check system resource usage in Linux?",
            "answer": "The top command displays real-time system resource utilization, including CPU and memory usage and running processes. Other commands like free (memory), df (disk space), and du (directory size) provide specific resource information."
          },
          {
            "type": "Text",
            "question": "What is a package manager in Linux?",
            "answer": "A package manager is a tool used to install, update, and manage software packages on Linux systems. Popular package managers include apt (Debian-based), yum (CentOS, Red Hat), and pacman (Arch Linux)."
          },
          {
            "type": "Text",
            "question": "Explain the use of the chmod command.",
            "answer": "The chmod command manages file and directory permissions on Linux, granting or revoking read, write, and execute permissions for the owner, group, and other users."
          },
          {
            "type": "Text",
            "question": "What is a kernel in Linux?",
            "answer": "The kernel is the core of the Linux operating system, managing the system's hardware resources. It acts as an interface between hardware and user-level processes, providing essential system services."
          },
          {
            "type": "Text",
            "question": "How do you archive and compress files in Linux?",
            "answer": "The tar (tape archive) command is used to create archives of files and directories. Compression utilities like gzip, bzip2, or xz can be used along with tar to create compressed archives."
          }
        ]
      },
      {
        "name": "Kubernetes",
        "description": "Learn the core concepts of Kubernetes",
        "questions": [
          {
            "type": "Text",
            "question": "What is Kubernetes primarily used for?",
            "answer": "Kubernetes is used to automate deployment, scaling, and management of containerized applications."
          },
          {
            "type": "Text",
            "question": "What is a Kubernetes Pod?",
            "answer": "A Pod is a group of one or more containers with shared resources and a shared network namespace. It is the smallest deployable unit in Kubernetes."
          },
          {
            "type": "Text",
            "question": "What is the smallest deployable unit in Kubernetes?",
            "answer": "A Pod is the smallest deployable unit in Kubernetes."
          },
          {
            "type": "Text",
            "question": "Explain the difference between a Deployment and a StatefulSet in Kubernetes.",
            "answer": "A Deployment manages stateless applications, ensuring desired replicas and handling updates. A StatefulSet is used for stateful applications, providing stable network identities, persistent storage, and ordered deployment/scaling."
          },
          {
            "type": "Text",
            "question": "What is the purpose of a Kubernetes Service?",
            "answer": "A service provides a stable endpoint to access a group of Pods, enabling communication within and outside the cluster and abstracting pod networking details."
          }
        ]
      },
      {
        "name": "Docker",
        "description": "Understanding Docker fundamentals",
        "questions": [
          {
            "type": "Text",
            "question": "What causes the 'docker: cannot connect to the Docker daemon' error, and how do you resolve it?",
            "answer": "This error occurs when the Docker client cannot communicate with the Docker daemon. The resolution involves checking if the daemon is running, ensuring the user has necessary permissions (Docker group membership), and verifying the correctness of the DOCKER_HOST environment variable in remote setups."
          },
          {
            "type": "Text",
            "question": "How do you fix the 'docker: image pull back off' error?",
            "answer": "This error happens when Docker fails to pull a specified image, usually due to incorrect image names, tags, or registry issues. To resolve it, double-check the image name and tag, ensure you are logged into the correct registry, and verify network connectivity."
          }
        ]
      }
    ]
  },
  {
    "name": "Intermediate",
    "description": "Dive deeper into DevOps with advanced concepts and real-world scenarios",
    "icon": "⚡",
    "topics": [
      {
        "name": "Linux",
        "description": "Advanced Linux operations and troubleshooting",
        "questions": [
          {
            "type": "Text",
            "question": "You need to find out why a server is running slowly. What steps would you take?",
            "answer": "Start by checking the system load using commands like top or htop to identify processes consuming excessive resources. Use iostat and iotop to check disk I/O, free -m for memory usage, df and du for disk space utilization, and network commands like netstat or ss for network issues. Review system logs in /var/log for errors or warnings."
          },
          {
            "type": "Text",
            "question": "A user's home directory is filling up with disk space on the root partition. How would you resolve this?",
            "answer": "Use the du -sh command to check disk usage in the user's directory, identify large files or directories. Move these to another partition with more space using mv or rsync, or compress them using tools like gzip or tar."
          },
          {
            "type": "Text",
            "question": "A website hosted on your server is inaccessible, showing a 502 Bad Gateway error. How would you troubleshoot this?",
            "answer": "Examine the web server (e.g., Nginx, Apache) logs for errors. Check backend services like application servers or databases for availability and connectivity. Verify configuration files for misconfigurations and ensure adequate resources (CPU, memory)."
          },
          {
            "type": "Text",
            "question": "You need to secure an SSH server from brute force attacks. What security measures would you implement?",
            "answer": "Disable root login, enforce strong password policies, configure SSH to limit login attempts (Fail2Ban), allow only specific IP addresses using iptables or ufw, and keep SSH software updated."
          },
          {
            "type": "Text",
            "question": "You need to automate backups of a directory to a remote server. How would you do it?",
            "answer": "Utilize rsync for efficient file transfer. Set up SSH-based authentication between the local and remote servers. Create a script to execute rsync with desired options and schedule it using a cron job (using crontab -e)."
          },
          {
            "type": "Text",
            "question": "A critical service has crashed and won't restart. What steps do you take to troubleshoot and resolve the issue?",
            "answer": "Check the service status and logs using systemctl status <service_name> and journalctl -u <service_name>. Look for configuration errors (validate config file syntax) and missing dependencies. Restart the service with systemctl restart <service_name> after addressing issues."
          },
          {
            "type": "Text",
            "question": "Your server's time is out of sync, causing issues with applications. How would you fix this?",
            "answer": "Install and configure ntpd or chrony to synchronize time with NTP servers. Check the status of NTP peers using ntpquery -p and ensure the timezone is set correctly with timedatectl."
          },
          {
            "type": "Text",
            "question": "You need to create a new user and ensure they have no shell access. How would you do this?",
            "answer": "Use the useradd command with the -s option to specify the user's shell. Set it to /sbin/nologin or /bin/false to prevent shell access. Example: useradd -s /sbin/nologin <username>."
          },
          {
            "type": "Text",
            "question": "Your server is running out of memory and starting to swap heavily. What actions would you take?",
            "answer": "Identify memory-intensive processes using top or ps aux --sort -%mem. Stop or restart those processes, add more RAM if possible, or optimize applications for reduced memory usage. Investigate potential memory leaks."
          }
        ]
      },
      {
        "name": "Kubernetes",
        "description": "Intermediate Kubernetes concepts and deployments",
        "questions": [
          {
            "type": "Text",
            "question": "You have a microservices-based application consisting of multiple containers. How would you deploy and manage this application in Kubernetes?",
            "answer": "Create a Deployment object for each microservice component, specifying container images, ports, resource requirements, and configurations. Define Services to expose the microservices within the cluster or to external users, facilitating communication and access."
          },
          {
            "type": "Text",
            "question": "Your team needs to update the version of an application running in Kubernetes without causing any downtime. How would you perform a rolling update?",
            "answer": "Utilize Kubernetes Deployments to manage the application's lifecycle. Gradually update Pod replicas with the new version while maintaining the desired number of available replicas, ensuring uninterrupted service."
          },
          {
            "type": "Text",
            "question": "You have a stateful application that requires persistent storage and stable network identities. How would you deploy and manage this application in Kubernetes?",
            "answer": "Use StatefulSets to manage deployments, ensuring each Pod has a unique network identity and a persistent storage volume. Define PersistentVolumeClaims to request storage, and associate them with appropriate StorageClasses for dynamic provisioning."
          },
          {
            "type": "Text",
            "question": "How does Kubernetes handle service discovery and load balancing for applications running in the cluster?",
            "answer": "Kubernetes Services provide a stable virtual IP address and DNS name for accessing Pods. The kube-proxy component handles load balancing, distributing requests evenly across Pod replicas, ensuring high availability and fault tolerance."
          },
          {
            "type": "Text",
            "question": "You need to ensure that containers running in Kubernetes are securely configured and isolated. How would you implement container security best practices?",
            "answer": "Employ container security best practices like using minimal, trusted base images, following least privilege principles, enabling Pod Security Policies, and regularly scanning images for vulnerabilities with tools like Clair or Trivy."
          }
        ]
      },
      {
        "name": "Docker",
        "description": "Advanced Docker concepts and practices",
        "questions": [
          {
            "type": "Text",
            "question": "You are tasked with optimizing a Docker image for a Java Spring Boot application. How would you achieve this using multi-stage builds?",
            "answer": "Use a multi-stage Dockerfile to separate the build and runtime environments. In the first stage, build the application using a JDK image. In the second stage, copy the built artifacts to a minimal JRE image, resulting in a smaller and more efficient final image."
          },
          {
            "type": "Text",
            "question": "Explain how to use Docker Compose to define and manage a multi-container application.",
            "answer": "Create a docker-compose.yml file to define services, each representing a container, specify image names, ports, volumes, and dependencies. Use commands like docker-compose up to start and manage the entire application stack."
          },
          {
            "type": "Text",
            "question": "You need to implement a blue-green deployment strategy using Docker. Explain how you would set up and manage this deployment.",
            "answer": "Create separate Docker environments for blue and green deployments. Use a load balancer to route traffic to the blue environment initially. Deploy the new version to the green environment, test it, and switch traffic to the green environment when ready."
          },
          {
            "type": "Text",
            "question": "You are running a Docker container that requires access to a host directory. How would you mount the host directory into the container?",
            "answer": "Use the -v flag during container creation to specify the host directory and the mount point inside the container. Ensure proper permissions on the host directory."
          }
        ]
      }
    ]
  },
  {
    "name": "Advanced",
    "description": "Master complex DevOps challenges with expert-level knowledge",
    "icon": "🔥",
    "topics": [
      {
        "name": "Linux",
        "description": "Expert-level Linux administration",
        "questions": [
          {
            "type": "Text",
            "question": "You suspect a server is under a DDoS attack. What steps would you take to mitigate the attack?",
            "answer": "Analyze network traffic using tools like tcpdump or iftop to identify attack patterns. Implement rate limiting or traffic filtering using firewalls (iptables or ufw). Consider using DDoS mitigation services or contacting your ISP for assistance."
          },
          {
            "type": "Text",
            "question": "You need to monitor a log file for specific errors and send an alert if they occur. How would you do this?",
            "answer": "Use tools like tail -f to monitor the log file continuously. Pipe the output to grep to filter specific errors. If errors are found, send an alert using email (mail or send), SMS, or other notification methods."
          },
          {
            "type": "Text",
            "question": "You need to schedule a recurring task to clean temporary files. How would you do this?",
            "answer": "Write a script to clean temporary files using commands like rm -rf /tmp/*. Make the script executable using chmod +x. Add a cron job using crontab -e to execute the script at desired intervals."
          },
          {
            "type": "Text",
            "question": "You need to compile and install software from source. What steps do you follow?",
            "answer": "Download the source code tarball, extract it using tar -xzf <tarball_name>, change to the extracted directory, read README or INSTALL files for instructions, run the configure script, execute make, and finally, use make install to install the software."
          },
          {
            "type": "Text",
            "question": "You need to find and kill all processes started by a specific user. How do you do this?",
            "answer": "List processes started by the user with ps -u <username>, pipe the output to grep -v PID to extract process IDs, and use xargs kill -9 to terminate those processes."
          }
        ]
      },
      {
        "name": "Kubernetes",
        "description": "Expert-level Kubernetes operations",
        "questions": [
          {
            "type": "Text",
            "question": "What does the error 'CrashLoopBackOff' in a Kubernetes Pod indicate, and how do you troubleshoot it?",
            "answer": "This error indicates that a Pod is repeatedly crashing and restarting. Troubleshooting involves checking Pod logs using kubectl logs <pod_name>, describing the Pod with kubectl describe pod <pod_name> for events and container status, and investigating common issues like environment variable misconfigurations, failed dependencies, or container command/argument errors."
          },
          {
            "type": "Text",
            "question": "Why might a Kubernetes Pod be stuck in the 'Pending' state, and how do you resolve it?",
            "answer": "A Pod in the 'Pending' state indicates it is waiting for resources to be allocated. Possible causes include insufficient cluster resources, node unschedulability due to node affinity or taints and tolerations, image pull issues, or resource limits exceeding node capacity."
          },
          {
            "type": "Text",
            "question": "What does the error 'ImagePullBackOff' indicate, and how do you fix it?",
            "answer": "This error means that Kubernetes cannot pull the container image for a Pod. Potential causes are incorrect image names, tags, private registry authentication issues, or network connectivity problems. Verify image details, registry access, and network connectivity to resolve it."
          },
          {
            "type": "Text",
            "question": "Your organization wants to host multiple applications with varying security and resource requirements in the same Kubernetes cluster. How would you implement multi-tenancy?",
            "answer": "Use Kubernetes Namespaces to logically partition the cluster. Enforce resource quotas and apply network policies for isolation and security. Implement RBAC (role-based access control) for granular permission management."
          },
          {
            "type": "Text",
            "question": "Your team wants to gradually roll out a new version of an application to a subset of users for testing before fully deploying it. How would you implement a canary deployment in Kubernetes?",
            "answer": "Create two deployments, one for the existing version and one for the new canary version. Use a service to route a small percentage of traffic to the canary deployment while monitoring its performance before gradually increasing traffic."
          },
          {
            "type": "Text",
            "question": "You need to back up and restore your Kubernetes cluster's data and configurations. What are the key considerations for backing up and restoring a Kubernetes cluster?",
            "answer": "Back up etcd data, Kubernetes configuration files, and persistent volumes. Choose an appropriate backup solution and strategy, considering the frequency and retention needs. Test the restore process regularly."
          },
          {
            "type": "Text",
            "question": "Your team needs to implement a disaster recovery plan for their Kubernetes cluster. What are the essential steps involved in setting up a disaster recovery plan for a Kubernetes cluster?",
            "answer": "Choose a disaster recovery site, replicate etcd data and configuration, set up a backup and restore process, test failover procedures regularly. Consider using managed solutions for simplified disaster recovery."
          },
          {
            "type": "Text",
            "question": "Your organization wants to prevent resource contention and ensure fair resource allocation across different teams or projects in the Kubernetes cluster. How would you implement resource quotas and limits?",
            "answer": "Use Resource Quotas to set limits on resource consumption (CPU, memory, storage) within Kubernetes namespaces, preventing individual workloads from monopolizing resources and ensuring equitable resource distribution."
          },
          {
            "type": "Text",
            "question": "Your team needs visibility into the performance and health of applications running in Kubernetes. How would you implement application observability?",
            "answer": "Utilize Kubernetes-native tools like Prometheus and Grafana for monitoring. Leverage Kubernetes events and logs for troubleshooting. Implement distributed tracing with tools like Jaeger or Zipkin for end-to-end request flow visibility."
          },
          {
            "type": "Text",
            "question": "Your organization follows the immutable infrastructure paradigm and wants to ensure that all changes to application deployments are versioned and reproducible. How would you implement immutable infrastructure in Kubernetes?",
            "answer": "Use declarative Kubernetes manifests (YAML files) for infrastructure and application deployment configurations. Store manifests in version control systems like Git. Implement CI/CD pipelines for automated, tracked, and auditable deployment workflows, ensuring reproducibility."
          },
          {
            "type": "Text",
            "question": "Your organization operates in multiple geographic regions and wants to deploy applications closer to end users for reduced latency and improved performance. How would you implement geo-distributed deployments in Kubernetes?",
            "answer": "Leverage solutions like Kubernetes Federation or multi-cluster management tools like Rancher or Anthos for deployments across multiple clusters in different regions. Implement network policies and global load balancing to route traffic to the closest cluster."
          },
          {
            "type": "Text",
            "question": "Your organization has workloads running on-premises and in public cloud environments and wants to adopt Kubernetes for workload portability. How would you implement hybrid cloud deployments with Kubernetes?",
            "answer": "Utilize Kubernetes distributions supporting hybrid cloud deployments (e.g., Amazon EKS Anywhere, Azure AKS, VMware Tanzu). Ensure consistent Kubernetes APIs and management interfaces across on-premises and cloud environments for seamless workload deployment and management."
          },
          {
            "type": "Text",
            "question": "Your organization operates in a regulated industry and needs to ensure compliance with security and privacy regulations for applications running in Kubernetes. How would you implement compliance and governance?",
            "answer": "Leverage Kubernetes security controls like Pod Security Policies, Network Policies, and RBAC to enforce regulations and policies. Implement auditing and logging for activity tracking and monitoring for compliance purposes."
          }
        ]
      },
      {
        "name": "Docker",
        "description": "Expert-level Docker orchestration",
        "questions": [
          {
            "type": "Text",
            "question": "Your Docker container is experiencing high memory usage. What steps would you take to troubleshoot and optimize memory consumption?",
            "answer": "Use docker stats to monitor container resource usage. Limit the container's memory resources using --memory flag. Analyze application code for memory leaks or inefficient memory management."
          }
        ]
      }
    ]
  }
];