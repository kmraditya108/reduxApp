pipeline {
    agent any
    
    environment {
        NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
    }
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from Git
                git 'https://github.com/kmraditya108/reduxApp.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    // Install dependencies using npm
                    sh '${NODE_HOME}/bin/npm install'
                }
            }
        }
        
        stage('Run Tests') {
            steps {
                script {
                    // Run tests (if you have any configured)
                    // sh '${NODE_HOME}/bin/npm test'
                    echo 'Test your code here!!'
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    // Build the production version of the React app
                    sh '${NODE_HOME}/bin/npm run build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    // Deploy to your desired platform
                    // Example: Deploy to AWS S3, Firebase, etc.
                    // aws s3 sync build/ s3://your-bucket-name --delete
                    echo 'Deploy to your desired platform!'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Build and deploy successful!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
