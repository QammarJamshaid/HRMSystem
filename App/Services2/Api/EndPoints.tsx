const EndPoints = {
    login: '/User/newlogin',
    updateUser: '/User/UpdateUser',
    getAllJobs: 'Job/NewJobGet',
    getJobDetail: 'Job/NewJobDetailGet',
    applyJob: '/JobApplication/JobFileApplicationWithFilterPost2',
    getJobApplication: 'JobApplication/JobApplicationsGet',
    getAllEducation: 'Education/NewEducationGet',
    addEducation: 'Education/EducationPost',
    deleteEducation: 'Education/DeleteEducation',
    getAllExperiences: 'Expereince/NewExperienceGet',
    addExperience: 'Expereince/ExperiencePost',
    deleteExperience: 'Expereince/DeleteExperience',
    bestmatch: "/Job/ForBestMatchWithCheckfilterJobGet"
}

export default EndPoints;