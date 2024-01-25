const getjobapplication = () => {
    const storejob = localStorage.getItem('job-aplication');
    if (storejob) {
        return JSON.parse(storejob);
    }
    return [];
};

const saveStorejob = id => {
    const storeApplication = getjobapplication();
    const exists = storeApplication.find(jobId => jobId === id);
    if (!exists) {
        const updatedApplication = [...storeApplication, id]; // Creating a new array by spreading the existing one and adding the new ID
        localStorage.setItem('job-aplication', JSON.stringify(updatedApplication));
    }
};

export { getjobapplication, saveStorejob };
