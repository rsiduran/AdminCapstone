import {  MessageSquareWarning, PawPrint, ShieldHalf, SearchCode, PersonStanding, Pencil } from "lucide-react"; 

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Scan QR", href: "#DownloadSection" },
  { label: "Features", href: "#FeatureSection" },
  { label: "Workflow", href: "#WorkflowSection" },
  { label: "Testimonials", href: "#Testimonials" },
];

export const testimonials = [
  {
    user: "Sarah Thompson",
    company: "Pet Adopter",
    image: user1, 
    text: "WanderPets made it incredibly easy for me to find a new home for a lost pet. The platform's pet-matching feature is a game-changer!",
  },
  {
    user: "John Doe",
    company: "Animal Shelter",
    image: user2, 
    text: "I was able to reunite a missing pet with its owner thanks to the easy-to-use features on WanderPets. This platform is a lifesaver!",
  },
  {
    user: "Emily Stevens",
    company: "Pet Adopter",
    image: user3, 
    text: "The AI-powered pet matching on WanderPets helped me find the perfect pet for my family. Highly recommended for anyone looking to adopt!",
  },
  {
    user: "Michael Johnson",
    company: "Pet Finder",
    image: user4, 
    text: "WanderPets has been instrumental in helping us track down lost pets and match them with new homes. It’s a wonderful resource for pet owners and shelters alike.",
  },
  {
    user: "Rachel Lee",
    company: "Animal Rescue Team",
    image: user5, 
    text: "The features on WanderPets are exactly what we needed to manage lost pets and adoption processes more effectively. Great platform for anyone involved in animal rescue!",
  },
  {
    user: "Tom Harris",
    company: "Volunteer, Lost Pets Search",
    image: user6, 
    text: "Using WanderPets made the process of reporting and reuniting missing pets faster and easier. It’s a game-changer for the pet community.",
  },
];


export const features = [
  {
    icon: <MessageSquareWarning />,
    text: "Lost Pet Reporting",
    description:
      "Easily report lost pets and help reunite them with their owners quickly using our community-driven platform.",
  },
  {
    icon: <PawPrint />,
    text: "Pet Adoption",
    description:
      "Browse available pets for adoption and find a perfect match for your family.",
  },
  {
    icon: <ShieldHalf />,
    text: "Donations and Support",
    description:
      "Support pet rescues through donations or offer assistance to local shelters in need.",
  },
  {
    icon: <SearchCode />,
    text: "Pet Finder",
    description:
      "Use advanced tools to track pets within your community, ensuring their safe return home.",
  },
  {
    icon: <PersonStanding />,
    text: "Community Collaboration",
    description:
      "Work together with your community to help find and reunite lost pets, and share information.",
  },
  {
    icon: <Pencil />,
    text: "Pet Statistics",
    description:
      "View insightful data and trends regarding lost pets, adoptions, and donations within your community.",
  },
];
export const checklistItems = [
  {
    title: "Seamless Pet Reporting",
    description:
      "Easily report lost or found pets, ensuring quick responses from the community.",
  },
  {
    title: "Pet Status",
    description:
      "Monitor the status of pets in shelters and adoption centers, helping streamline the process.",
  },
  {
    title: "AI-Powered Pet Identification Camera",
    description:
      "Integrate an AI camera, similar to Google Lens, to instantly identify and gather information about pets.",
  },
  {
    title: "Real-time Pet Updates",
    description:
      "Get real-time notifications on lost pet sightings, helping reunite pets with their owners faster.",
  },
];


export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Pet Adoption Process" },
  { href: "#", text: "Lost & Found Pet Tips" },
  { href: "#", text: "Pet Care Resources" },
  { href: "#", text: "Documentation" },
];

export const platformLinks = [
  { href: "#", text: "Adopt a Pet" },
  { href: "#", text: "Mobile App" },
];

export const communityLinks = [
  { href: "#", text: "Meetups for Pet Owners" },
  { href: "#", text: "Volunteering Opportunities" },
  { href: "#", text: "Donations" },
  { href: "#", text: "Pet Rescue Stories" },
];

