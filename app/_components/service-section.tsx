import SectionDescription from '@/components/custom/section-description'
import SectionTitle from '@/components/custom/section-title'
import ServiceCard from '@/components/custom/service-card'
import AppSection from '@/components/layout/app-section'
import { SERVICES } from '@/mock'
import React from 'react'

// type Props = {}

const ServiceSection = () => {
  const serviceData = SERVICES

  return (
    <AppSection id="services">
      <div className="w-full md:w-1/2 mx-auto">
        <SectionTitle name="Core Skills" />
        <SectionDescription
          content={`A summary of my core technical skills and capabilities developed through academic projects, IT operations work, and leadership experience in real-world environments.
`}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5 mt-10 md:mt-16">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.key}
            name={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </AppSection>
  )
}

export default ServiceSection
