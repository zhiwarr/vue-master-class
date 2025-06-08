import { fakerEN_US as faker } from '@faker-js/faker'
import { createClient } from '@supabase/supabase-js'
// we change the import.meta to process becouse in here we are not from vite enviroment we are in node enviroment
// and we use service role key instead api key for security resons and dont use vite prefix if we use it we provide the role key then the users
// can do whatever they want to our database
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SERVICE_ROLE_KEY)

const projects = []
const seedProjects = async (entiresNumber) => {
  for (let number = 1; number < entiresNumber; number++) {
    const name = faker.company.name()

    projects.push({
      name: name,
      slug: faker.helpers.slugify(name),
      status: faker.helpers.arrayElement(['in-progress', 'completed']),
      collaborators: faker.helpers.arrayElements([1, 2, 3]),
    })
  }
  await supabase.from('projects').insert(projects)
}

await seedProjects(10)
