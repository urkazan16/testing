Rails.application.routes.draw do
  get 'testing/index'
  get 'welcome/index'

  resources :articles

  root 'welcome#index'

end
