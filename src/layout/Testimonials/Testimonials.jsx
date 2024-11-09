import Card from '../../components/Card/Card';

const Testimonials = () => {
  return (
    <>
      <div className="container px-md-5">
        <div className="row">
          <div className="header">
            <h2 className="text-uppercase pb-5">What Clients Are Saying...</h2>
          </div>
          <div className="row">
            <Card header="Amina Yakubu" body="Customer" contentClassName="text-center text-valgee-gray" headerClassName="font-medium text-lg" bodyClassName="text-valgee-red" imgURL="\assets\images\placeholder-female.png">
              “Please maintain status quo. Your services are just amazing. On no account should your standard drop. People will be ready to pay more for their comfort. Many thanks”
            </Card>
            <Card header="Roseline Benabeyi" body="Customer" contentClassName="text-center text-valgee-gray" headerClassName="font-medium text-lg" bodyClassName="text-valgee-red" imgURL="\assets\images\placeholder-female.png">
              “I think you people are doing a great job, I only pray you will keep up the tempo especially in terms of maintenance of your vehicles and other services. Kudos”
            </Card>
            <Card header="Apeh Maryann Ene" body="Customer" contentClassName="text-center text-valgee-gray" headerClassName="font-medium text-lg" bodyClassName="text-valgee-red" imgURL="\assets\images\placeholder-female.png">
              “This is my first experience and I was really impressed. This will definitely be my go to transport anytime, anyday. Thanks for the excellent ride.”
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
