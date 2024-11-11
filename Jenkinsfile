// pipeline {
//     agent any
//     tools {nodejs "NODEJS"}
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Deliver') {
//             steps {
//                 sh 'chmod -R +rwx ./jenkins/scripts/deliver.sh'
//                 sh 'chmod -R +rwx ./jenkins/scripts/kill.sh'
//                 sh './jenkins/scripts/deliver.sh'
//                 input message: 'Finished using the web site? (Click "Proceed" to continue)'
//                 sh './jenkins/scripts/kill.sh'
//             }
//         }
//     }
// }


pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'yarn' 
            }
        }
    }
}


// pipeline {
//     agent any
//     environment {
//         NODE_HOME = tool name: 'NodeJS', type: 'NodeJSInstallation'
//     }
//     stages {
//         stage('Checkout') {
//             steps {
//                 // Pull the latest code from the Git repository
//                 git 'https://github.com/kmraditya108/reduxApp.git'
//             }
//         }
//         stage('Install Dependencies') {
//             steps {
//                 script {
//                     // Install dependencies using npm or yarn
//                     sh 'npm install'
//                 }
//             }
//         }
//         stage('Run Tests') {
//             steps {
//                 script {
//                     // Run tests using npm
//                     // sh 'npm test -- --coverage'
//                     echo 'React unit Test here ---->  marking it successful!'
//                 }
//             }
//         }
//         stage('Build') {
//             steps {
//                 script {
//                     // Build the production version of the app
//                     // sh 'npm run build'
//                     echo 'Building the app step here ---> Marking it as done'
//                 }
//             }
//         }
//         stage('Deploy') {
//             steps {
//                 script {
//                     // Deploy to a web server or S3, etc.
//                     // Example: Deploy to AWS S3 (adjust to your case)
//                     // sh 'aws s3 sync build/ s3://your-bucket-name --delete'
//                     sh 'npm start'
//                     echo 'App started on http://localhost:3000 -----> More Deployement step here ---->  marking it successful!'
//                 }
//             }
//         }
//     }
//     post {
//         success {
//             // Notify on success (optional)
//             echo 'Build and deploy successful!'
//         }
//         failure {
//             // Notify on failure (optional)
//             echo 'Build failed!'
//         }
//     }
// }
