# Explore Gettysburg

Welcome to Explore Gettysburg! This single page application is designed to be a tool for learning, critical thinking, and open discussion between historians young and old. You can read about different events fronm the battle, step into the shoes of historical figures to make crucial judgment calls, and share additional information and thoughts through comment sections. Once you've created your account, you can gain a greater understanding of one of the most pivotal military engagements in American history!

## Installation

Fork and clone the repo to your local machine.

Change directory into **eg_backend** and run:

 - bundle install

Setup and seed the database:

- rake db:create
- rake db:migrate
- rake db:seed

Run the rails server:

- rails s

Navigate to the **explore-gettysburg/eg_frontend**.

Open the index.html file in the browser of your choice.

## Usage

- Select different event markers to discover specific events from each day of the battle.
- Read about the decisions different leaders made that affected the outcome of the conflict.
- Use critical thinking to select a crucial choice a historical figure had to make during the battle.
- Edit your historical choice and see how many other users selected the choice you did.
- Create or delete comments tied to each major event of the battle, engage in discussion with other users.
- Reply to certain user comments to provide your own opinion on their post.
