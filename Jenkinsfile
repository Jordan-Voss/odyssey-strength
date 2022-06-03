pipeline { 
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'expo build:web' 
            }
        }
        stage('Test'){
            steps {
                sh 'cd ~'
            }
        }
        stage('Deploy') {
            steps {
                sh 'ls'
            }
        }
    }
}
