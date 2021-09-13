# Docusign Frontend Code Exercise

### Description
GUIDELINES FOR CODE
- Include a link to the hosted repository (e.g. Github, Gitlab etc.). We would not review archives or single files.
  > https://dev.d2reekcdlsvo0q.amplifyapp.com

- The repo should include a `README` file that includes:
  - A high-level explanation about what the code is doing.
    > Build a checkout system which takes a list of items scanned and outputs the total cost.
    - Requirement #1 
      - You are building a checkout system for a shop that only sells apples and oranges. Apples cost `60c` and oranges cost `25c`. Make reasonable assumptions about the inputs to your solution; for example, many candidates take a list of strings as input.
    - Requirement #2
      - The shop may decide to introduce new offers. Implement the option to activate the following if the shop chooses to do so.
  - Reasoning behind your technical choices.
    > Hard coded dummy data for time sakes
    > Typescript compiler wasn't working. Given time constraints, jsx and js worked fine.
    > Reactbootstrap is a nice lightweight UI framework
    > Using a map for lookup was maybe over-engineered given the small data set but saved time given that all the items were stored in memeory
  - Trade-offs you might have made. Anything you might do differently if you were to spend additional time on the project.
    > I would have done unit testing on the edge cases.
    > I would have added better styling on the cart
    - Remove items from cart
    - Figure out why typescript compiler wasn't working 
    - Storing cart in browser or redis or even database
    - Pull images dynamically
    - Abstract out the special offers 
  - Ideally, the code you are providing:
    - Is leveraging front-end web technologies.
      > Done
    - Uses libraries, whose technical choice you can justify.
      > React probably is unnecessary for such a small project, however, the framework allows for extensibility for future feature development.
    - Is deployed and hosted somewhere (Heroku, Amazon Web Services, Google Cloud etc.)
      > Done. AWS

WHAT ARE WE LOOKING FOR ?
We are looking for, quality and solution approach over code completeness. 
It is fine to leave things aside provided you call out the trade-offs in your
project's README file. Your code will be reviewed by our engineers for the following aspects:
- Functionality: Does the solution satisfy the core requirements in the exercise? Does it handle edge cases?
- Algorithmic performance: Does the solution utilize standard patterns for better runtime and memory performance?
- Technical choices: Does the choice of libraries, tools, languages and architecture etc. seem appropriate for the chosen application?
- Code style: How readable is the code? Does it have a clear structure and is well organized?
