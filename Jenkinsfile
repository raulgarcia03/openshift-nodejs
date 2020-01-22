pipeline {
    agent {
        label 'node'
    }
    stage('Build') {
        script {
            openshift.withCluster() {
                openshift.withProject() {
                    openshift.newApp('https://github.com/cellosofia/openshift-nodejs', '--name=myapp')
                }
            }
        }
    }
}