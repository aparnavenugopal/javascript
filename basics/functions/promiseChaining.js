function fetchUserData() {
    return fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        return response.json();
      });
  }
  
  function fetchUserDetails(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        return response.json();
      });
  }
  
  
  // Fetch user data
fetchUserData()
.then(userData => {
  // Fetch additional details for each user
  const promises = userData.map(user => fetchUserDetails(user.id));
  return Promise.all(promises)
    .then(userDetails => {
      // Combine user data with additional details
      const combinedData = userData.map((user, index) => {
        return { ...user, ...userDetails[index] };
      });
      return combinedData;
    });
})
.then(combinedData => {
  // Process and display combined data
  console.log('Combined user data:', combinedData);
})
.catch(error => {
  console.error('Error:', error);
});

  