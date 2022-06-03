pipeline { 
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'npm install'
                sh 'expo build:web'
            }
        }
        stage('Test'){
            steps {
                sh ''
            }
        }
        stage('Deploy') {
            steps {
                sh 'cd ~'
                sh 'ls'
            }
        }
    }
}
