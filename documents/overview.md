# The Resume Factory Project Plan

### 1. Project Title

Resume Factory – a web app that matches job postings base on a user’s resume and helps recruiters selecting the applicant’s resumes for the highest possibility to get an interview.

### 2. Abstract / Statement of the problem

a. Purpose and reason for this project

The purpose of the Resume Factory is to provide job seekers a helping tool to speed up the application process so that they can focus more on the interview preparation. Also, Resume Factory is a place for recruiters to collect a pool of applicants when they look for a particular skill set.

b. What problem is this project designed to address/resolve?

The application process is complicated and typically takes much time when the applicants must search the most relevant jobs for them. Due to students’ experiences in applying for part-time and internship jobs, the chance to get an interview is meager and frustrating. Many people do not know how to alter their resumes to pass the Applicant Tracking System (ATS). They usually fail in CV screening because of applying only one resume for multiple job postings.

On the recruiters’ side, they also receive many applications, and they have to work hard for collecting and scanning all of the CVs to find suitable candidates to be interviewed. Even with the help of modern technology as ATS, there are still chances of missing information here and there.

c. What makes your project “unique” and/or different from other available solutions?

The Resume Factory is unique because of the following reasons:
- Firstly, the Resume Factory focuses on the freshers and junior levels, who are typically rejected by the companies. They are lack of experience and do not know how to alter their resumes. If they have chances to prove themselves and contribute to the chosen company, it is efficient for both sides.
- Unlike other competitors like Linkedin, Glassdoor, and Indeed, the Resume Factory can suggest jobs base on users’ abilities and interests. Therefore, users do not have to search and scan irrelevant job postings.
- Lastly, Resume Factory can suggest profiles to the recruiters as they need by matching keywords and skills. The recruiters can save time in collecting applicant data when needed.

### 3. Deliverables and Target Group/beneficiaries

The targeted groups are:
- Job applicants: the freshers and the junior levels, who are under-graduated or graduated within 2 years from educational institutes in Canada
- Recruiters: HR people who are working for companies in Canada and looking for a new talent pool for their companies

### 4. Project Implementation and timelines

a. Technology used:

- ReactJS: provide a user interface that users give input and display output
- Java + Springboot: provide server side scriptings that process the business as given the input from the interface and return output to UI
- Databases include MySQL to store data for the application only. Redis as a NoSQL server to store business data and stored procedures/functions/queue messages
- Learning curve: Redis, ReactJS, external APIs or web crawler technology such as luminati.io.

ReactJS is one of the current hot topic among web development. Since it is one of the most popular web programming technologies so far, it is a good approach to include them in this project as they can help the development team meets the latest trend in the current situation. As for Redis and luminati.io or other substitute APIs such as LinkedIn or Glassdoors API, none of the team members is exposed to those technologies. Therefore, this would be a good opportunity to tackle new knowledge and bring a fresh idea on how to work on alternative techniques.

b. Timelines:

-  May 09, 2020: Project brainstorming and proposal
-  May 23, 2020: Project environment and structure set-up, git initialization, tasks definition and estimation, database design, UI mock-up
- June 06, 2020: Back-end and front-end implementations
- June 20, 2020: Back-end and front-end implementations with testable functions as a Job seeker available
- July 11, 2020: Implement functions with role as head hunter/ candidate seekers
- July 25, 2020: Wrapping up project and come up with test cases
-  Aug 05, 2020: Project demonstration and final report

### 5. Monitoring and evaluation

Resume Factory should deliver these functions:

- Users is allowed to give resume or a job posting as their inputs
- Application should suggest relevant job postings or resumes to a specific target
- Application should be able to handle multiple requests at a time and store precise data on user's information and input.
