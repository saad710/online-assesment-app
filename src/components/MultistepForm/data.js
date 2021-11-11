import { TextField } from "@mui/material";

export const steps = [
    {
      label: 'Your name',
      description: `Browse and Upload`,
      // info: {
      //   title: "Let's start with your name",
      //   input: <TextField sx={{
      //       width: "80%"
      //   }}
      //   helperText="Please enter your name"
      //   label="Name"
      // />,
      // info_descrition: "Please fill the necessary information"
      // },
      info:  [ {
        id: "001",
        question: 'Martha ,Mary, May, Made Marvelous Milk. In that sentence who made the milk? ',
        options: [
            {
                id: 1,
                option: 'Martha',
                queId : "001",
		            score: 15,
            },
            {
                id: 2,
                option: 'Mary',
                queId : "001",
                score: 10,
            },
            {
                id: 3,
                option: 'Martha, Mary, May',
                queId : "001",
                score: 5,
            },
        ],

    },

    {
      id: "002",
      question: 'who found the box of milk?',
      options: [
          {
              id: 1,
              option: 'jhon',
              queId : "002",
              score: 10,
          },
          {
              id: 2,
              option: 'jenny',
              queId : "002",
              score: 10,
          },
          {
              id: 3,
              option: 'May',
              queId : "002",
              score: 5,
          },
      ],

  },
  
  ],
      about: "Some information about the field 1"
    },
    {
      label: 'Describes',
      description:
        'Browse and Upload',
        // info: {
        //     title: "What describes you?",
        //     input: <TextField sx={{
        //         width: "80%"
        //     }}
        //     helperText="Please enter your name"
        //     label="Name"
        //   />,
        //   info_descrition: "Please fill the necessary information"
        //   },
        info:  [ {
          id: "001",
          question: 'who guess the output?',
          options: [
              {
                  id: 1,
                  option: 'Martha',
                  queId : "001",
                  score: 15,
              },
              {
                  id: 2,
                  option: 'Mary',
                  queId : "001",
                  score: 10,
              },
              {
                  id: 3,
                  option: 'Martha, Mary, May',
                  queId : "001",
                  score: 5,
              },
          ],
  
      },
  
      {
        id: "002",
        question: 'who is worthy?',
        options: [
            {
                id: 1,
                option: 'Martha',
                queId : "002",
                score: 10,
            },
            {
                id: 2,
                option: 'Mary',
                queId : "002",
                score: 10,
            },
            {
                id: 3,
                option: 'Martha, Mary, May',
                queId : "002",
                score: 5,
            },
        ],
  
    },
    
    ],
          about: "Some information about the field 2"
    },
    {
      label: 'Services',
      description: `Browse and Upload`,
      // info: {
      //   title: "What services are you looking for?",
      //   input: <TextField sx={{
      //       width: "80%"
      //   }}
      //   helperText="Please enter your name"
      //   label="Name"
      // />,
      // info_descrition: "Please fill the necessary information",
      // },
      info:  [ {
        id: "001",
        question: 'Martha ,Mary, May, Made Marvelous Milk. In that sentence who made the milk? This is an easy and dumb question!',
        options: [
            {
                id: 1,
                option: 'Martha',
                queId : "001",
		            score: 15,
            },
            {
                id: 2,
                option: 'Mary',
                queId : "001",
                score: 10,
            },
            {
                id: 3,
                option: 'Martha, Mary, May',
                queId : "001",
                score: 5,
            },
        ],

    },

    {
      id: "002",
      question: 'what if Martha Made the milk?',
      options: [
          {
              id: 1,
              option: 'Martha',
              queId : "002",
              score: 10,
          },
          {
              id: 2,
              option: 'Mary',
              queId : "002",
              score: 10,
          },
          {
              id: 3,
              option: 'Martha, Mary, May',
              queId : "002",
              score: 5,
          },
      ],

  },
  
  ],
      about: "Some information about the field 3"
    },
    {
        label: 'Budget',
        description: `Browse and Upload`,
        // info: {
        //     title: "Please select your budget",
        //     input: <TextField sx={{
        //         width: "80%"
        //     }}
        //     helperText="Please enter your name"
        //     label="Name"
        //   />,
        //   info_descrition: "Please fill the necessary information"
        //   },
        info:  [ {
          id: "001",
          question: 'what is the last words of mary?',
          options: [
              {
                  id: 1,
                  option: 'Martha',
                  queId : "001",
                  score: 15,
              },
              {
                  id: 2,
                  option: 'Mary',
                  queId : "001",
                  score: 10,
              },
              {
                  id: 3,
                  option: 'Martha, Mary, May',
                  queId : "001",
                  score: 5,
              },
          ],
  
      },
  
      {
        id: "002",
        question: 'who will be the best maker? ',
        options: [
            {
                id: 1,
                option: 'Martha',
                queId : "002",
                score: 10,
            },
            {
                id: 2,
                option: 'Mary',
                queId : "002",
                score: 10,
            },
            {
                id: 3,
                option: 'Martha, Mary, May',
                queId : "002",
                score: 5,
            },
        ],
  
    },
    
    ],
          about: "Some information about the field 4"
      },
      {
        label: 'Complete',
        description: `Browse and Upload`,
        // info: {
        //     title: "Complete Submission",
        //     input: <TextField sx={{
        //         width: "80%"
        //     }}
        //     helperText="Please enter your name"
        //     label="Name"
        //   />,
        //   info_descrition: "Please fill the necessary information"
        //   },
        info:  [ {
          id: "001",
          question: 'Martha ,Mary, May, Made Marvelous Milk. In that sentence who made the milk? This is an easy and dumb question!',
          options: [
              {
                  id: 1,
                  option: 'Martha',
                  queId : "001",
                  score: 15,
              },
              {
                  id: 2,
                  option: 'Mary',
                  queId : "001",
                  score: 10,
              },
              {
                  id: 3,
                  option: 'Martha, Mary, May',
                  queId : "001",
                  score: 5,
              },
          ],
  
      },
  
      {
        id: "002",
        question: 'Martha ,Mary, May, Made Marvelous Milk. In that sentence who made the milk? This is an easy and dumb question!',
        options: [
            {
                id: 1,
                option: 'Martha',
                queId : "002",
                score: 10,
            },
            {
                id: 2,
                option: 'Mary',
                queId : "002",
                score: 10,
            },
            {
                id: 3,
                option: 'Martha, Mary, May',
                queId : "002",
                score: 5,
            },
        ],
  
    },
    
    ],
          about: "Some information about the field 5"
      },
  ];