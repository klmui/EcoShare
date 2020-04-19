exports.getAllActions = (request, response) => {
  actions = [
      {
          'id': '1',
          'question': 'greeting',
          'significance': 'greeting sig',
          'completed': '0'
      },
      {
          'id': '2',
          'question': 'greeting2',
          'significance': 'greeting sig 2',
          'completed': '0'
      }
  ]
  return response.json(actions);
}
