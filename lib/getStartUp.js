const baseUrl = process.env.API_URL;


export const getStartUp = async () => {
  const resp = await fetch(`${baseUrl}/startup/api/get-all`);

  const posts = resp.json();
  return posts;
};
export const getStartUpDetails = async (id) => {
  const resp = await fetch(`${baseUrl}/startup/api/${id}`, {
    cache: "no-store",
  });
  if (!resp.ok) {
    
    throw new Error(`Failed to fetch startup (${resp.status}`);
  }
  const startup =  await resp.json();
  // console.log(startup);
  return startup;
};

// export const getStartUpDetails = async (id) => {
//   if (!id) throw new Error("No startup ID provided");

//   const url = `http://localhost:3000/startup/api/${id}`;

//   try {
//     const resp = await fetch(url, {
//       // Optional but recommended: signal it's a server-side request
//       cache: 'no-store' // or 'force-cache' / 'reload' based on your needs
//     });

//     if (!resp.ok) {
//       throw new Error(`Failed to fetch startup details: ${resp.status}`);
//     }

//     const startup = await resp.json();
//     return startup;
//   } catch (err) {
//     console.error("Error fetching startup details:", err.message);
//     throw err; // rethrow so calling code can handle it
//   }
// };
