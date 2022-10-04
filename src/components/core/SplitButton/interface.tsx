export type ButtonVariant =
  | 'filled-primary'
  | 'filled-secondary'
  | 'filled-success'
  | 'filled-warning'
  | 'filled-danger'
  | 'filled-info'
  | 'outlined-primary'
  | 'outlined-secondary'
  | 'outlined-success'
  | 'outlined-warning'
  | 'outlined-danger'
  | 'outlined-info'

  export type ActionType =
    | 'primary'
    | 'success'
    | 'danger'

export interface ISplitButton
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>, 
        HTMLDivElement
    > {
        variant?: ButtonVariant
        size?: 'sm' | 'base'
        text: string
    }

export interface ISection 
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>, 
        HTMLDivElement
    > {
        sectionTitle?: string
    }

export interface IAction 
    extends React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLDivElement>, 
        HTMLDivElement
    > {
        text: string
        variant?: ActionType
    }

export interface ClassInterface {
    parent: string,
    child: string
}
