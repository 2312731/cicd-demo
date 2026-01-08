pipeline {
    agent any
    stages {
        stage('Clone') {
            steps {
                echo "Cloning source code from GitHub"
            }
        }
        stage('Build Docker') {
            steps {
                sh 'docker build -t cicd-demo .'
            }
        }
        stage('Run Docker') {
            steps {
                sh '''
                docker rm -f cicd-demo || true
                docker run -d -p 3000:3000 --name cicd-demo cicd-demo
                '''
            }
        }
    }
}
