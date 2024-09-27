import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Card from '../components/Card';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
    <Hero />
    <HomeCards>
    <Card
            title="For Developers"
            description="Browse our React jobs and start your career today"
            link="/jobs"
            linkText="Browse Jobs"
          ></Card>
          <Card
            title="For Employers"
            description="List your job to find the perfect developer for the role"
            link="/add-job"
            linkClassName="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
            linkText="Add Job"
            bg="bg-blue-200"
          ></Card>
    </HomeCards>
    <HomeCards>
    <Card
            title="For Developers"
            description="Browse our React jobs and start your career today"
            link="/jobs"
            linkText="Browse Jobs"
          ></Card>
    </HomeCards>
    <JobListings isHome={true}/>
    <ViewAllJobs />
    </>
  );
};

export default HomePage