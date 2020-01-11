import {} from './anime.js';

const Portfolio = (function() {

    class Project {

        constructor(projectName, projectImage) {
            this.projectGallery = [];
            this.projectName = projectName;
            this.projectImage = projectImage;
        }

        static limit(maxProjects) {
            return maxProjects > 4;
        }

        appendProjects() {
            for (const project of this.projectGallery) {

                if (Projects.limit(this.projectGallery.length)) {
                    return;
                } else {
                    // loop through the projectGallery and create new projects
                }

            }
        }
    }

    return {

    };

})();