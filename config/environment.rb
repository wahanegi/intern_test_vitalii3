# Load the Rails application.
require_relative "application"

# Load the app's custom environment variables here, so that they are loaded before environments/*.rb
secret_token_variables = File.join(Rails.root, 'config', 'secret_token_variables.rb')
load(secret_token_variables) if File.exists?(secret_token_variables)


# Initialize the Rails application.
Rails.application.initialize!

