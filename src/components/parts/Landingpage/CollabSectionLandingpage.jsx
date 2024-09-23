import Button from "@/components/ui/Button";
import React from "react";

function CollabSectionLandingpage() {
  return (
    <section className="mb-28 px-4 lg:px-20 flex flex-col justify-center items-center">
      <h3 className="heading-3 text-center">Let’s Work Together</h3>
      <p className="text-center body-1 mb-4 mt-3">
        Looking to hire a full-time designer or need{" "}
        <br className="lg:block hidden" /> a freelancer for your next project?
      </p>
      <Button size="lg" variant="primary">Get in Touch</Button>
    </section>
  );
}

export default CollabSectionLandingpage;
