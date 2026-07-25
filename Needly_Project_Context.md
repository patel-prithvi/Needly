# Project Context --- Needly

## Overview

**Needly** is a hyperlocal community marketplace where people post what
they **need** or **want to sell**, and nearby users respond with offers.

Unlike traditional marketplaces where sellers create listings first,
Needly is **request-driven**: - A user posts a requirement. - Nearby
users who can fulfill it respond. - The requester compares offers, chats
with responders, reviews photos, and completes the deal offline.

No online payments or push notifications are included in the MVP.

------------------------------------------------------------------------

# Vision

Build a trusted local community where people can quickly find items,
buy, sell, or exchange goods with nearby users.

------------------------------------------------------------------------

# Goals

-   Help users find items quickly.
-   Encourage local buying and selling.
-   Reduce search effort by matching requests with nearby users.
-   Build trust through ratings and reviews.

------------------------------------------------------------------------

# MVP Scope

## Included

-   Authentication (Neon Auth / Better Auth)
-   User profiles
-   Google Maps location picker
-   Create "Need" posts
-   Create "Sell" posts
-   Nearby feed
-   Offer system
-   Chat (text + images)
-   Reviews
-   Search & filters
-   Responsive React UI
-   Django REST API
-   Neon PostgreSQL

## Excluded

-   Online payments
-   Push notifications
-   Delivery services
-   Voice/video calls
-   Admin analytics
-   AI features

------------------------------------------------------------------------

# Tech Stack

## Frontend

-   React (Vite)
-   React Router
-   Axios
-   Tailwind CSS

## Backend

-   Python
-   Django
-   Django REST Framework

## Database

-   Neon PostgreSQL

## Authentication

-   Neon Auth (Better Auth)

## Maps

-   Google Maps API

## Storage

-   Cloudinary (recommended) or S3-compatible object storage

------------------------------------------------------------------------

# Core User Roles

## Buyer / Requester

Can: - Create need posts - View nearby posts - Receive offers - Chat -
Accept an offer - Leave reviews

## Seller

Can: - Create sell posts - Respond to need posts - Upload images -
Chat - Receive reviews

------------------------------------------------------------------------

# Core Modules

1.  Authentication
2.  User Profile
3.  Location
4.  Need Posts
5.  Sell Posts
6.  Nearby Feed
7.  Offers
8.  Chat
9.  Reviews
10. Search & Filters

------------------------------------------------------------------------

# User Flow

## Need Flow

Login

↓

Choose location

↓

Create Need Post

↓

Nearby users discover it

↓

Users submit offers

↓

Requester compares offers

↓

Chat

↓

Offline meeting

↓

Review

------------------------------------------------------------------------

## Sell Flow

Login

↓

Create Sell Post

↓

Nearby users discover it

↓

Interested user starts conversation

↓

Offline deal

↓

Review

------------------------------------------------------------------------

# Post Types

## Need

Fields

-   Title
-   Description
-   Category
-   Budget (optional)
-   Urgency
-   Images (optional)
-   Location
-   Radius

## Sell

Fields

-   Title
-   Description
-   Category
-   Price
-   Condition
-   Images
-   Location
-   Radius

------------------------------------------------------------------------

# Offer

Each offer contains

-   Price
-   Message
-   Images
-   Status
    -   Pending
    -   Accepted
    -   Rejected

------------------------------------------------------------------------

# Chat

Supports

-   Text
-   Images

No voice or video.

------------------------------------------------------------------------

# Reviews

Each completed deal allows:

-   Rating (1--5)
-   Comment

Displayed on the user's public profile.

------------------------------------------------------------------------

# Search

Users can filter by

-   Category
-   Distance
-   Price
-   Need / Sell
-   Latest

------------------------------------------------------------------------

# Location Logic

Every post stores:

-   Latitude
-   Longitude
-   Radius

Nearby feeds are generated using geospatial distance queries.

------------------------------------------------------------------------

# UI Pages

-   Landing
-   Login
-   Register
-   Home Feed
-   Nearby Feed
-   Need Details
-   Sell Details
-   Create Need
-   Create Sell
-   My Posts
-   My Offers
-   Messages
-   Profile
-   Settings

------------------------------------------------------------------------

# Future Enhancements

-   Push notifications
-   Online payments
-   Delivery integration
-   Saved searches
-   Bookmarks
-   AI price suggestions
-   AI scam detection
-   Verified sellers
-   Business accounts

------------------------------------------------------------------------

# Design Principles

-   Mobile-first
-   Clean and minimal
-   Fast interactions
-   Simple navigation
-   Trust-focused
-   Location-aware

------------------------------------------------------------------------

# Success Metrics

-   Posts created
-   Offers submitted
-   Deals completed
-   Average response time
-   User retention
-   Review completion rate

------------------------------------------------------------------------

# Project Motto

**Post what you need. Find it nearby.**
