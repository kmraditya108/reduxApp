pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'develop', url: 'https://github.com/kmraditya108/reduxApp.git'
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh 'npm install'
                }
            }
        }
        
        stage('Run app') {
            steps {
                script {
                    sh 'npm start'
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
