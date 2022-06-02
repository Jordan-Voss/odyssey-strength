pipeline { 
    agent any 
    options {
        skipStagesAfterUnstable()
    }
    stages {
        stage('Build') { 
            steps { 
                sh 'ls' 
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
