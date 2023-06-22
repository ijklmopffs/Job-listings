// Get references to the job filter elements
const filterElements = document.querySelectorAll(".skills p");

// Add click event listeners to each filter element
filterElements.forEach((filterElement) => {
  filterElement.addEventListener("click", handleFilterClick);
});

// Function to handle filter element click
function handleFilterClick(event) {
  // Get the clicked filter value
  const selectedFilter = event.target.textContent;

  // Show/hide job listings based on the selected filter
  filterJobListings(selectedFilter);
}

// Function to filter job listings based on selected filter
function filterJobListings(selectedFilter) {
  const jobListings = document.getElementsByClassName("one");

  // Loop through each job listing and check if it matches the selected filter
  for (let i = 0; i < jobListings.length; i++) {
    const listing = jobListings[i];

    // Check if the job listing contains the selected filter
    const containsFilter = Array.from(
      listing.getElementsByClassName("skills")[0].children
    ).some((skillElement) => skillElement.textContent === selectedFilter);

    // Toggle visibility based on selected filter
    listing.style.display = containsFilter ? "flex" : "none";
  }
}
