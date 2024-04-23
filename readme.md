# VTECE SmartFarm Research Group Website

Welcome to the repository of our Research Group's website. This README provides guidance on how to update and maintain the website, specifically focusing on adding or modifying member profiles and research project information.

## Getting Started

Before making any changes, make sure you have a basic understanding of JSON (JavaScript Object Notation) as our data files use this format. You will need permissions to commit changes to this repository.

## Directory Structure

- `/assets/`: Contains static files like images and JSON data files.
  - `/members.json`: Contains information about group members.
  - `/research.json`: Contains details about research projects.

## How to Add or Update Member Information

Member information is stored in `members.json` located in the `/assets/` directory. Here's how to update it:

1. Open the `members.json` file.
2. To add a new member, locate the correct category and then append a new object to the existing array with the following structure:

```json
{
  "name": "Full Name",
  "title": "Your current academic title",
  "department": "Your department",
  "bio": "Short biography of the member",
  "imageSrc": "URL to the member's photo, or upload it to '/images/' folder"
}
```
3. To update an existing member's information, find their object in the array and modify the necessary fields.
4. Commit your changes with a descriptive message.

## How to Add or Update Research Information
Research project information is stored in research.json located in the /assets/ directory. Follow these steps to update it:

1. Open the research.json file.
2. To add a new project, append a new object to the existing array with the following structure:

```json
// For published research
{
    "title": "Title of Published Research 1",
    "authors": ["Author One", "Author Two", "Author Three"],
    "year": "2022",
    "summary": "Brief summary of the research.",
    "link": "http://link-to-research.com/paper1",
    "pdf": "http://link-to-research.com/downloads/paper1.pdf"
}

// For on going research
{
    "title": "Title of Ongoing Research 1",
    "researchers": ["Researcher One", "Researcher Two"],
    "startYear": "2023",
    "expectedCompletion": "2025",
    "description": "Description of the ongoing research, its goals, and current status."
}
```
3. To update an existing project, locate the corresponding object in the array and edit the desired fields.
4. Commit your changes with a descriptive message.
   
## Committing Changes
Make sure to commit your changes with a clear and descriptive commit message, outlining what was added or updated. This helps in maintaining a clear history of changes.

Contact
For any queries or issues, please contact zhenz@vt.edu.

Thank you for contributing to our research group's website!