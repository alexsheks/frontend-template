import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { BASE_URL } from '../api'

// about us page
// first point to test API
// using axios as HTTP-client and react-query for server state management
// do not forget to configure your own .env file with GIST_ID
export default function About() {
  const { data, error, isLoading } = useQuery('about', async () =>
    axios
      .get(BASE_URL + process.env.REACT_APP_GIST_ID, {
        gist_id: process.env.REACT_APP_GIST_ID,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      .then((res) => JSON.parse(res.data.files['gistfile1.txt'].content))
  )

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

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
                        className={`badge ${
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
