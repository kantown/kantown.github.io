const jsonData = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "./images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "./images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "./images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "./images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "./images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "./images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "./images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "./images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "./images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "./images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]

;


  const jobList = document.getElementById('jobs');

  jsonData.forEach(jobItem => {

  const newJob = document.createElement('div');
  specifyElement(newJob, 'job_items', jobList);

    const itemInfo = document.createElement('div');
    specifyElement(itemInfo, 'item_info', newJob);

      const jobImage = document.createElement('img');
      specifyElement(jobImage, 'photo', itemInfo);
      jobImage.src=jobItem.logo;
      jobImage.alt='Job photo';

      const jobDetails = document.createElement('div');
      specifyElement(jobDetails, 'details', itemInfo);

        const nameTags = document.createElement('div');
        specifyElement(nameTags, 'name_tags', jobDetails);

          const jobName = document.createElement('span');
          specifyElement(jobName, 'name', jobDetails)
          jobName.textContent = jobItem.company;


          const tags = document.createElement('div');
          specifyElement(tags, 'tags', nameTags);


        const possition = document.createElement('span');
        specifyElement(possition, 'possition', jobDetails);
        possition.textContent = jobItem.position;

        const jobAdDetails = document.createElement('div');
        specifyElement(jobAdDetails, 'job_ad_details', jobDetails);

          const adDate = document.createElement('span');
          specifyElement(adDate, 'date', jobAdDetails);
          adDate.textContent = jobItem.postedAt;


          const jobType = document.createElement('span');
          specifyElement(jobType, 'jobs_type', jobAdDetails);
          jobType.textContent = jobItem.contract;


          const jobLocation = document.createElement('span');
          specifyElement(jobLocation, 'jobs_place', jobAdDetails);
          jobLocation.textContent = jobItem.location;


    const filters = document.createElement('div');
    specifyElement(filters, 'filters', newJob);

    jobItem.languages.forEach(element => {
      const newLanguge = document.createElement('span');
      specifyElement(newLanguge, 'filter', filters)
      newLanguge.textContent = element;
  });
});


function specifyElement(elem, elemClass, elemParent){
  elem.classList.add(elemClass);
  elemParent.appendChild(elem);
};
