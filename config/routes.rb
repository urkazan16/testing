Rails.application.routes.draw do
  get 'testing/index'
  get 'welcome/index'

  resources :articles do
  	collection do 
  		get 'say_hello' => "articles#say_hello"
  	end 
  end

  root 'welcome#index'

get '/button', to: 'your_controller_name#button', as: 'button'

end
