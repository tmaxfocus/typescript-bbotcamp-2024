var courseName = "Typescript Boot Camp VersionII";
if (courseName) {
    var subtitle = "Learn the language fundamentals, build practical projects";
    displayName(courseName);
}
console.log("can i access from outside ==> ", subtitle);
function displayName(courseName) {
    console.log("Course name : ", courseName.toLocaleUpperCase());
}
