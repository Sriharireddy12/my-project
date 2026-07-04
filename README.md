# 🚀 Config2Script

## 📖 Overview

**Config2Script** is an automation tool designed to simplify Linux system setup and configuration. It allows users to define their preferred software packages, system settings, and environment preferences through a web interface or configuration file. The tool automatically generates a Bash shell script that configures the Linux environment, reducing manual effort and saving time during operating system installation or reconfiguration.

---

## ✨ Features

* 🧠 **Automated Script Generation** – Converts user-defined configurations into executable Linux setup scripts.
* 💻 **Customizable Setup** – Select system updates, software packages, environment variables, and custom commands.
* ⚙️ **Multi-Distro Support** – Supports Ubuntu, Debian, Fedora, and Arch Linux.
* 📦 **Predefined Templates** – Ready-to-use templates for developers, DevOps engineers, and testers.
* 🔍 **Validation Engine** – Detects syntax errors and unsupported commands before generating scripts.
* 🧾 **Log Generation** – Maintains logs for script generation and execution.
* 🌐 **Web Interface** – Create, preview, and download setup scripts through a simple web dashboard.

---

## 🛠️ Tech Stack

* Python
* Flask
* HTML
* CSS
* JavaScript
* Bash Scripting

---

## 📂 Project Structure

```text
Config2Script/
├── app.py
├── requirements.txt
├── templates/
├── static/
├── generated_scripts/
├── logs/
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/<your-username>/Config2Script.git
cd Config2Script
```

### 2️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 3️⃣ Run the Application

```bash
python app.py
```

### 4️⃣ Open in Browser

```
https://my-project-nine-blue.vercel.app/
```

---

## 📊 How It Works

1. Users enter:

   * Preferred software packages
   * Environment variables
   * System update preferences
   * Custom shell commands

2. Config2Script validates the input.

3. The application generates a ready-to-use Bash (`.sh`) script.

4. Users download and execute the script on their Linux system.

5. Execution logs are generated for transparency and debugging.

---

## 💡 Example Use Cases

* Setting up a new Linux development environment automatically.
* Creating reusable setup scripts for teams.
* Automating server deployment and package installation.
* Teaching Linux automation and system administration.

---

## 📸 Screenshots 

Add screenshots here.

Example:

```md
![Home Page](screenshots/home.png)      

![Generated Script](screenshots/script.png) 
```

---

## 🚀 Future Enhancements

* Docker support
* Cloud deployment automation
* Script scheduling
* Configuration import/export
* User authentication

---

## 👨‍💻 Author

**Srihari Reddy**

GitHub: https://github.com/Sriharireddy12
