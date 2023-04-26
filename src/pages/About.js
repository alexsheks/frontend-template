import React from 'react'

import { useAtom } from 'jotai'
import { participantsAtom } from '../store/about.atom'

// about us page
// first point to test API
// using axios as HTTP-client and react-query for server state management
// do not forget to configure your own .env file with GIST_ID
export default function About() {
  const [data] = useAtom(participantsAtom)

  return (
    <section className="flex justify-center items-center w-full h-full p-5">
      <div className="grid gap-5 grid-cols-2 w-full h-full">
        {data.participants.map((participant, index) => {
          return (
            <div
              key={index}
              className="w-full card card-side bg-base-100 shadow-xl h-full"
            >
              <figure>
                <img
                  src={participant.image}
                  alt="Movie"
                  className="w-52 h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">{participant.name}</h2>
                <p className="text-white opacity-60">{participant.role}</p>
                <div className="card-actions justify-end">
                  {participant.skills.map((skill, index) => {
                    return (
                      <div
                        key={index}
                        className={`h-8 badge ${
                          index === 0
                            ? 'badge-primary'
                            : index === 1
                            ? 'badge-secondary'
                            : 'badge-accent'
                        } `}
                      >
                        {skill}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
