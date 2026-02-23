# Data Model: Glowvera Skincare Brand Website

This document outlines the key data entities and their relationships for the Glowvera skincare brand website.

## Entities

### Product
-   **Name**: String (e.g., "Glow Serum")
-   **Description**: Text
-   **Image(s)**: Array of URLs/Paths
-   **Ingredients**: Text
-   **Usage Instructions**: Text
-   **Benefits**: Text
-   **Category**: String (e.g., "Cleansers", "Serums", "Moisturizers")
-   **Slug**: String (for URL-friendly product pages)

### Brand Information
-   **About Us Text**: Text
-   **Mission/Vision Statement**: Text
-   **Brand Imagery**: Array of URLs/Paths

### Skincare Routine
-   **Name**: String (e.g., "Morning Refresh Routine")
-   **Description**: Text
-   **Steps**: Array of Text (e.g., "Step 1: Cleanse with...")
-   **Associated Products**: Array of Product IDs (references to Product entity)
-   **Slug**: String (for URL-friendly routine pages)

### Contact Information
-   **Email Address**: String
-   **Phone Number**: String (Optional)
-   **Physical Address**: String (Optional)

## Relationships

-   **Product** can be associated with multiple **Skincare Routines**.
-   **Skincare Routine** can feature multiple **Products**.

## Notes

-   Content for these entities will be managed via a Content Management System (CMS).
-   Detailed CMS integration specifics (e.g., API endpoints, data fetching methods) will be defined in `contracts/`.