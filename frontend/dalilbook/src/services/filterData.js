import notesData from "/src/dataset/notesdata.json"; // adjust path as needed

import photosData from "/src/dataset/photosdata.json"; // adjust path as needed
import videoData from "/src/dataset/videodata.json"; // adjust path as needed

function filterNotes(data=notesData, query) {
  if (!query) return data;
  const lowerCaseQuery = query.toLowerCase();
  return data.filter(item =>
    item.title.toLowerCase().includes(lowerCaseQuery) ||
    item.description.toLowerCase().includes(lowerCaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)) ||
    item.text.toLowerCase().includes(lowerCaseQuery)
  );
}

function filterVideos(data=videoData, query) {
  if (!query) return data;
  const lowerCaseQuery = query.toLowerCase();
  return data.filter(item =>
    item.title.toLowerCase().includes(lowerCaseQuery) ||
    item.description.toLowerCase().includes(lowerCaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
}

function filterPhotos(data=photosData, query) {
  if (!query) return data;
  const lowerCaseQuery = query.toLowerCase();
  return data.filter(item =>
    item.title.toLowerCase().includes(lowerCaseQuery) ||
    item.description.toLowerCase().includes(lowerCaseQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery))
  );
}

console.log(filterNotes("Sunset"));


    
    
export { filterNotes, filterVideos, filterPhotos };