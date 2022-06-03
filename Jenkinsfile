pipeline { 
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'npm install --save-dev expo-cli' 
            }
        }
        stage('Test'){
            steps {
                sh 'expo build:web'
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
